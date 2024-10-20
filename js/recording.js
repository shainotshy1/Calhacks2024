let mediaRecorder;
let recordedChunks = [];

const startRecordingButton = document.getElementById("startRecordingButton");
const stopRecordingButton = document.getElementById("stopRecordingButton");
const pauseRecordingButton = document.getElementById("pauseRecordingButton");
const resumeRecordingButton = document.getElementById("resumeRecordingButton");
const recordingInterface = document.getElementById("recordingInterface");
const stoppedInterface = document.getElementById("stoppedInterface");
const recordingStatus = document.getElementById("recordingStatus");

startRecordingButton.addEventListener("click", async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: "audio/webm" });
    saveRecording(blob);
  };

  mediaRecorder.start();
  startRecordingButton.style.display = "none";
  recordingInterface.style.display = "block";
  recordingStatus.textContent = "Recording...";
});

stopRecordingButton.addEventListener("click", () => {
  mediaRecorder.stop();
  recordingInterface.style.display = "none";
  stoppedInterface.style.display = "block";
});

pauseRecordingButton.addEventListener("click", () => {
  mediaRecorder.pause();
  recordingStatus.textContent = "Paused";
});

resumeRecordingButton.addEventListener("click", () => {
  mediaRecorder.resume();
  recordingStatus.textContent = "Recording...";
});

function saveRecording(blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = "recording.webm";
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}
