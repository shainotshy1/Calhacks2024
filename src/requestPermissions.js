navigator.mediaDevices
  .getUserMedia({ audio: !0 })
  .then((e) => {
    console.log("Microphone access granted"),
      chrome.runtime.sendMessage({ message: "micPermissionGranted" }),
      chrome.storage.local.set({ waitingForMicPermission: !1 }, () => {
        console.log("Updated waitingForMicPermission to false");
      }),
      e.getTracks().forEach((e) => e.stop()),
      window.close();
  })
  .catch((e) => {
    console.error("Error accessing microphone:", e),
      chrome.storage.local.set({ waitingForMicPermission: !1 }, () => {
        console.log("Updated waitingForMicPermission to false, despite error");
      }),
      window.close();
  });
