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

function getDOM() {
  // return document.body.innerText;
  // return document.querySelectorAll( 'body *' );
  // return document.getElementsByTagName("*");
  // return document.body.innerText;
  // return "hello";

  const result = document.getElementsByTagName('input', 'button');
  const elements = []

  for (let i = 0; i < result.length; i++) {
      const e = result[i]
      let final = e.tagName;

      if  (e.id || e.ariaLabel) {

          final += '(';

          if (e.id) { final += `id='${e.id}' `;}
          if (e.type) { final += `type='${e.type}' `; }
          if (e.placeholder) { final += `placeholder='${e.placeholder}' `;}
          if (e.ariaLabel) { final += `ariaLabel='${e.ariaLabel}' `;}

          final += ')'

          elements.push(final)
      }
  }

  return elements

  // let result = document.getElementsByTagName("*");
  // // let result = document.title;
  // let elems = ["Title: " + document.title];
  // for (let i = 0; i < result.length; i++) {
  //   // if (result[i].tagName == 'A' || result[i].tagName == 'INPUT' || result[i].tagName == 'TEXTAREA' || result[i].tagName == 'H1' || result[i].tagName == 'H2' || result[i].tagName == 'H3') {
  //   if (
  //     result[i].ariaCurrent ||
  //     result[i].ariaSelected ||
  //     result[i].tabindex >= 0 ||
  //     (result[i].tagName == "A" && result[i].href && result[i].innerText) ||
  //     ((result[i].tagName == "INPUT" ||
  //       result[i].tagName == "SELECT" ||
  //       result[i].tagName == "BUTTON") &&
  //       !result[i].disabled)
  //   ) {
  //     //  || result[i].tagName == 'A' || result[i].tagName == 'INPUT' || result[i].tagName == 'SELECT'
  //     let str = "HTMLTag: " + result[i].tagName;
  //     if (result[i].id) {
  //       str += ", ID: " + result[i].id;
  //     }
  //     if (result[i].for) {
  //       str += ", For: " + result[i].for;
  //     }
  //     if (result[i].type) {
  //       str += ", Type: " + result[i].type;
  //     }
  //     if (result[i].innerText) {
  //       str += ", innerText: " + result[i].innerText;
  //     }
  //     elems.push(str);
  //   }
  // }

  // for (let i = 0; i < result.length; i++) {
  //   if (result[i].tagName.toUpperCase === "P") {
  //     elems.push("Tag: " + result[i].tagName + ", Attributes: " + result[i].attributes + ", innerText: " + result[i].innerText);
  //   }
  // }
  // return elems.length
  // return JSON.stringify(elems);
  // return typeof result;
  return elems;
}

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

// chrome.browserAction.onClicked.addListener(async function(tabId, changeInfo, tab) {
//   const result = await chrome.scripting.executeScript({
//     target : {tabId : tabId},
//     func : getDOM,
//   });

//   chrome.runtime.sendMessage({ greeting: "hello", res: result }, function (response) {
//     console.log(response);
//   });
// });
// chrome.webNavigation.onCompleted

chrome.tabs.onActivated.addListener(async function (activeInfo) {
  // if (activeInfo.changeInfo.status === 'complete') {
  const [{ result }] = await chrome.scripting.executeScript({
    // await????
    target: { tabId: activeInfo.tabId },
    func: getDOM,
  });

  chrome.runtime.sendMessage(result, function (response) {
    console.log(response);
  });

  // }
});

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  // chrome.scripting.executeScript(details.tabId, {
  //   code: ' chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {' +
  //         '     console.log(response);' +
  //         ' })'
  // });
  if (changeInfo.status === "complete") {
    const [{ result }] = await chrome.scripting.executeScript({
      // await????
      target: { tabId: tabId },
      func: getDOM,
    });

    chrome.runtime.sendMessage(result, function (response) {
      console.log(response);
    });
  }
});
