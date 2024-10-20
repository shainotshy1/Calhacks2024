// import { sendToOffscreenDoc, getCenterWindowPosition, createWindow } from "./chromeAPI";

// chrome.runtime.onMessage.addListener(async (s, n, o) => {
//   if ("stopRecording" === s.action) sendToOffscreenDoc("stopRecording", {});
//   else if ("requestMic" === s.message) {
//     chrome.storage.local.set({ waitingForMicPermission: !0 });
//     let a = chrome.runtime.getURL("requestPermissions.html"),
//       r = await getCenterWindowPosition(400, 200);
//     console.log("start create window"),
//       await createWindow({
//         url: a,
//         type: "popup",
//         width: Math.round(400),
//         height: Math.round(200),
//         left: r.left + (r.availLeft || 0),
//         top: r.top + (r.availTop || 0),
//       });
//   }
// });

// chrome.runtime.onInstalled.addListener((details) => {
//   if (details.reason.search(/install/g) === -1) {
//     return;
//   }
//   chrome.tabs.create({
//     url: chrome.runtime.getURL("welcome.html"),
//     active: true,
//   });
// });

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));