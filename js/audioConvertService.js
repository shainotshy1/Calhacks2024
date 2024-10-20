import * as e from "./lamejs.js";
export async function convertAudio(e, t) {
  if ("mp3" === t) return convertWebMToMp3(e);
  if ("wav" === t) return convertWebMToWav(e);
  throw Error('Unsupported audio format. Please choose "mp3" or "wav".');
}
export async function concatAudio(e, t) {
  if ("mp3" === t) return concatenateMp3Blobs(e);
  if ("wav" === t) return concatenateWavBlobs(e);
  throw Error('Unsupported audio format. Please choose "mp3" or "wav".');
}
async function convertWebMToMp3(t) {
  return new Promise(async (n, a) => {
    try {
      let r = await convertWebMToWav(t);
      r.arrayBuffer()
        .then(async (t) => {
          let a = e.WavHeader.readHeader(new DataView(t));
          if (!a) throw Error("Could not read WAV header.");
          let r = parseInt(localStorage.getItem("selectedBitrate"), 10) || 128,
            o = a.channels,
            l = a.sampleRate,
            s = new e.Mp3Encoder(o, l, r),
            u = new Int16Array(t, a.dataOffset, a.dataLen / 2),
            i = [];
          if (2 === o) {
            let c = new Int16Array(u.length / 2),
              f = new Int16Array(u.length / 2);
            for (let d = 0, h = 0; d < u.length; d += 2, h++)
              (c[h] = u[d]), (f[h] = u[d + 1]);
            for (let w = 0; w < u.length / 2; w += 1152) {
              let $ = c.subarray(w, w + 1152),
                p = f.subarray(w, w + 1152),
                g = s.encodeBuffer($, p);
              g.length > 0 && i.push(new Int8Array(g));
            }
          } else
            for (let y = 0; y < u.length; y += 1152) {
              let _ = u.subarray(y, y + 1152),
                b = s.encodeBuffer(_);
              b.length > 0 && i.push(new Int8Array(b));
            }
          let m = s.flush();
          if ((m.length > 0 && i.push(new Int8Array(m)), i.length > 0)) {
            let v = new Blob(i, { type: "audio/mp3" });
            n(v);
          } else throw Error("MP3 Conversion Failed");
        })
        .catch((e) => a(e));
    } catch (o) {
      a(o);
    }
  });
}
async function convertWebMToWav(e) {
  let t = await decodeWebMToAudioBuffer(e);
  function n(e, t, n) {
    for (let a = 0; a < n.length; a++) e.setUint8(t + a, n.charCodeAt(a));
  }
  let a = t.numberOfChannels,
    r = t.sampleRate,
    o;
  if (2 === a) {
    let l = t.getChannelData(0),
      s = t.getChannelData(1);
    o = new Float32Array(l.length + s.length);
    for (let u = 0, i = 0; u < l.length; u++, i += 2)
      (o[i] = l[u]), (o[i + 1] = s[u]);
  } else o = t.getChannelData(0);
  let c = new ArrayBuffer(44 + 2 * o.length),
    f = new DataView(c);
  return (
    n(f, 0, "RIFF"),
    f.setUint32(4, 32 + 2 * o.length, !0),
    n(f, 8, "WAVE"),
    n(f, 12, "fmt "),
    f.setUint32(16, 16, !0),
    f.setUint16(20, 1, !0),
    f.setUint16(22, a, !0),
    f.setUint32(24, r, !0),
    f.setUint32(28, 4 * r, !0),
    f.setUint16(32, 2 * a, !0),
    f.setUint16(34, 16, !0),
    n(f, 36, "data"),
    f.setUint32(40, 2 * o.length, !0),
    !(function e(t, n, a) {
      for (let r = 0; r < a.length; r++, n += 2) {
        let o = Math.max(-1, Math.min(1, a[r]));
        t.setInt16(n, o < 0 ? 32768 * o : 32767 * o, !0);
      }
    })(f, 44, o),
    new Blob([f], { type: "audio/wav" })
  );
}
async function decodeWebMToAudioBuffer(e) {
  let t = new (window.AudioContext || window.webkitAudioContext)();
  try {
    let n = await e.arrayBuffer();
    return await new Promise((e, a) => {
      t.decodeAudioData(
        n,
        (t) => {
          e(t);
        },
        a
      );
    });
  } catch (a) {
    throw (
      (console.error("Error decoding audio data:", a),
      Error(
        "Error decoding audio data. The audio format might be unsupported or the data could be corrupted."
      ))
    );
  }
}
async function concatenateWavBlobs(e) {
  let t = (e) =>
      new Promise((t, n) => {
        let a = new FileReader();
        (a.onload = () => t(a.result)), (a.onerror = n), a.readAsArrayBuffer(e);
      }),
    n = async (e) => {
      let t = 0,
        n = [],
        a;
      for (let r of e)
        a || (a = r.slice(0, 44)),
          (t += r.byteLength - 44),
          n.push(new Uint8Array(r, 44));
      let o = new Uint8Array(a.byteLength + t);
      o.set(new Uint8Array(a), 0);
      let l = a.byteLength;
      for (let s of n) o.set(s, l), (l += s.byteLength);
      let u = new DataView(o.buffer);
      return (
        u.setUint32(4, 36 + t, !0),
        u.setUint32(40, t, !0),
        new Blob([o], { type: "audio/wav" })
      );
    },
    a = await Promise.all(e.map((e) => t(e)));
  return n(a);
}
async function concatenateMp3Blobs(e) {
  let t = (e) =>
      new Promise((t, n) => {
        let a = new FileReader();
        (a.onload = () => t(a.result)), (a.onerror = n), a.readAsArrayBuffer(e);
      }),
    n = await Promise.all(e.map((e) => t(e))),
    a = n.reduce((e, t) => e + t.byteLength, 0),
    r = new Uint8Array(a),
    o = 0;
  for (let l of n) r.set(new Uint8Array(l), o), (o += l.byteLength);
  return new Blob([r], { type: "audio/mp3" });
}
