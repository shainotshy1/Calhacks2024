import {
  convertAudio as e,
  concatAudio as r,
} from "./services/audioConvertService.js";
let mediaRecorder = null,
  audioUrl = "",
  convertedAudioBlobs = [],
  audioChunks = [],
  chunkQueue = [],
  isProcessingChunk = !1,
  micStream = null,
  tabStream = null,
  selectedAudioFormat = null,
  headerBlob = null,
  lastClusterProcessUpTo = -1;
async function startRecording(e) {
  try {
    let r = "true" === localStorage.getItem("isCleanSoundEnabled"),
      t = localStorage.getItem("selectedAudioDeviceId");
    selectedAudioFormat = localStorage.getItem("selectedAudioFormat");
    let o = {
        audio: {
          deviceId: t ? { exact: t } : void 0,
          echoCancellation: r,
          noiseSuppression: r,
        },
      },
      a;
    if (
      ((micStream = null),
      (tabStream = null),
      "Tab" === e.recordingType || "VoiceTab" === e.recordingType)
    ) {
      tabStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          mandatory: {
            chromeMediaSource: "tab",
            chromeMediaSourceId: e.streamId,
          },
        },
        video: !1,
      });
      let i = "true" === localStorage.getItem("isMuteRecordedTab");
      if (!i) {
        let c = new AudioContext(),
          s = c.createMediaStreamSource(tabStream);
        s.connect(c.destination);
      }
      if ("VoiceTab" === e.recordingType) {
        let d = new AudioContext();
        micStream = await navigator.mediaDevices.getUserMedia(o);
        let n = d.createMediaStreamSource(micStream),
          u = d.createMediaStreamSource(tabStream),
          m = d.createMediaStreamDestination();
        n.connect(m), u.connect(m), (a = m.stream);
      } else a = tabStream;
    } else a = micStream = await navigator.mediaDevices.getUserMedia(o);
    startMediaRecorder(a);
  } catch (l) {
    console.error("The following error occurred: " + l);
  }
}
function startMediaRecorder(e) {
  (mediaRecorder = new MediaRecorder(e, {
    mimeType: "audio/webm; codecs=opus",
  })),
    (audioChunks = []),
    (chunkQueue = []),
    (convertedAudioBlobs = []),
    (headerBlob = null),
    (lastClusterProcessUpTo = -1),
    (mediaRecorder.ondataavailable = async (e) => {
      console.log("Chunk received:", e.data.size, "bytes"),
        audioChunks.push(e.data),
        await processAudioChunks(!1);
    }),
    mediaRecorder.start(6e4);
}
async function processAudioChunks(e) {
  let r = new EBML.Decoder(),
    t = new EBML.Encoder();
  if ("webm" !== selectedAudioFormat) {
    let o = "1f43b675",
      a = new Blob(audioChunks, { type: mediaRecorder.mimeType });
    try {
      let i = await a.arrayBuffer(),
        c = r.decode(i);
      if (null === headerBlob) {
        let s = c.findIndex((e) => e.EBML_ID === o);
        if (-1 !== s) {
          let d = c.slice(0, s),
            n = t.encode(d);
          headerBlob = new Blob([n], { type: mediaRecorder.mimeType });
        }
      }
      c.forEach((r, a) => {
        if (r.EBML_ID === o && a > lastClusterProcessUpTo) {
          let i = c.findIndex((e, r) => r > a && e.EBML_ID === o);
          if (-1 !== i || e) {
            let s = e ? c.length : i,
              d = c.slice(a, s),
              n = t.encode(d),
              u = new Blob([n], { type: mediaRecorder.mimeType }),
              m = new Blob([headerBlob, u], { type: mediaRecorder.mimeType });
            chunkQueue.push(m), (lastClusterProcessUpTo = s - 1);
          }
        }
      });
    } catch (u) {
      console.error("Error processing the audio chunks", u);
    }
    isProcessingChunk ||
      (console.log("Initiating queue processing..."), processQueue());
  }
}
async function processQueue() {
  for (isProcessingChunk = !0; chunkQueue.length > 0; ) {
    let r = chunkQueue.shift();
    console.log("Processing chunk...");
    try {
      let t = await e(r, selectedAudioFormat);
      console.log("Chunk converted successfully"), convertedAudioBlobs.push(t);
    } catch (o) {
      console.error("Conversion error: ", o.message),
        localStorage.setItem("isLoading", (!1).toString()),
        chrome.runtime.sendMessage({ type: "recordingCompleteWithError" });
    }
  }
  isProcessingChunk = !1;
}
async function stopRecording() {
  return mediaRecorder && "inactive" !== mediaRecorder.state
    ? new Promise((e, t) => {
        try {
          mediaRecorder.stream.getTracks().forEach((e) => e.stop()),
            micStream && micStream.getTracks().forEach((e) => e.stop()),
            tabStream && tabStream.getTracks().forEach((e) => e.stop()),
            (mediaRecorder.onstop = async () => {
              if ("webm" === selectedAudioFormat) {
                let o = new Blob(audioChunks, { type: mediaRecorder.mimeType });
                (audioUrl = URL.createObjectURL(o)), e();
              } else {
                await waitForQueueProcessingToComplete(),
                  await processAudioChunks(!0),
                  await waitForQueueProcessingToComplete(),
                  console.log(
                    "Count of convertedAudioBlobs before saving:",
                    convertedAudioBlobs.length
                  );
                try {
                  convertedAudioBlobs.length > 1
                    ? r(convertedAudioBlobs, selectedAudioFormat)
                        .then((r) => {
                          (audioUrl = URL.createObjectURL(r)), e();
                        })
                        .catch(t)
                    : ((audioUrl = URL.createObjectURL(convertedAudioBlobs[0])),
                      e());
                } catch (a) {
                  t(a);
                }
              }
            }),
            (mediaRecorder.onerror = (e) => {
              t(
                e.error ||
                  Error("An error occurred while stopping the recording.")
              );
            }),
            mediaRecorder.stop();
        } catch (o) {
          t(o);
        }
      })
    : Promise.reject(Error("MediaRecorder is not recording."));
}
async function waitForQueueProcessingToComplete() {
  return new Promise((e) => {
    !(function r() {
      0 !== chunkQueue.length || isProcessingChunk ? setTimeout(r, 100) : e();
    })();
  });
}
async function pauseRecording() {
  if (!mediaRecorder || "recording" !== mediaRecorder.state)
    return Promise.reject(Error("MediaRecorder is not recording."));
  mediaRecorder.pause();
}
async function resumeRecording() {
  if (!mediaRecorder || "paused" !== mediaRecorder.state)
    return Promise.reject(Error("MediaRecorder is not paused."));
  mediaRecorder.resume();
}
chrome.runtime.onMessage.addListener((e, r, t) => {
  if ("offscreen" === e.target)
    switch (e.type) {
      case "startRecording":
        return (
          startRecording(e.data)
            .then(() => {
              t({ status: "Recording started" });
            })
            .catch((e) => {
              t({ error: e.message });
            }),
          !0
        );
      case "stopRecording":
        return (
          stopRecording()
            .then(() => {
              localStorage.setItem("latestAudioUrl", audioUrl),
                chrome.runtime.sendMessage({
                  type: "recordingComplete",
                  data: audioUrl,
                }),
                t({ status: "Recording stopped" });
            })
            .catch((e) => {
              console.log("stopping err " + e.message),
                localStorage.setItem("isLoading", (!1).toString()),
                chrome.runtime.sendMessage({
                  type: "recordingCompleteWithError",
                }),
                t({ error: e.message });
            }),
          !0
        );
      case "pauseRecording":
        return (
          pauseRecording()
            .then(() => {
              t({ status: "Recording paused" });
            })
            .catch((e) => {
              t({ error: e.message });
            }),
          !0
        );
      case "resumeRecording":
        return (
          resumeRecording()
            .then(() => {
              t({ status: "Recording resumed" });
            })
            .catch((e) => {
              t({ error: e.message });
            }),
          !0
        );
    }
  return !1;
});
