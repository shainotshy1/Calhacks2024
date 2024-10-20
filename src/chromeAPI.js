let OFFSCREEN_DOCUMENT_PATH = "/offscreen.html";
export async function setupOffscreenDocument(e) {
  let t = await findExistingOffscreenDocument(e);
  !(t.length > 0) &&
    (globalThis.creating
      ? await globalThis.creating
      : ((globalThis.creating = chrome.offscreen.createDocument({
          url: e,
          reasons: [
            chrome.offscreen.Reason.BLOBS,
            chrome.offscreen.Reason.LOCAL_STORAGE,
            chrome.offscreen.Reason.USER_MEDIA,
          ],
          justification:
            "Keep audio recording on when extension popup is closed, save it to blobs, get recording settings from local storage",
        })),
        await globalThis.creating,
        (globalThis.creating = null)));
}
export async function sendToOffscreenDoc(e, t) {
  console.log("sendToOffscreenDoc: " + e),
    await setupOffscreenDocument(OFFSCREEN_DOCUMENT_PATH);
  let o = { target: "offscreen", type: e, data: t };
  return new Promise((e, t) => {
    chrome.runtime.sendMessage(o, (o) => {
      chrome.runtime.lastError
        ? t(chrome.runtime.lastError.message)
        : o?.errorInOffscreen
        ? t(o.errorInOffscreen)
        : e(o);
    });
  });
}
export async function closeOffscreenDocument() {
  let e = await findExistingOffscreenDocument(OFFSCREEN_DOCUMENT_PATH);
  e.length > 0
    ? (await chrome.offscreen.closeDocument(),
      console.log("Offscreen document closed successfully."))
    : console.log("No offscreen document exists to close.");
}
async function findExistingOffscreenDocument(e) {
  let t = chrome.runtime.getURL(e);
  if (!chrome.runtime.getContexts)
    throw Error("Your browser does not support 'getContexts' method.");
  try {
    let o = await chrome.runtime.getContexts({
      contextTypes: ["OFFSCREEN_DOCUMENT"],
      documentUrls: [t],
    });
    return o;
  } catch (n) {
    throw (
      (console.error("Failed to get existing offscreen document contexts:", n),
      n)
    );
  }
}
export async function getActiveTabStreamId() {
  try {
    let e = await chrome.tabs.query({ active: !0, currentWindow: !0 });
    if (0 === e.length) throw Error("No active tab found.");
    let t = e[0],
      o = await chrome.tabCapture.getMediaStreamId({ targetTabId: t.id });
    return o;
  } catch (n) {
    throw (console.error("Failed to get active tab stream ID: ", n.message), n);
  }
}
export const manageMicrophonePermission = async () => {
  try {
    let e = await navigator.permissions.query({ name: "microphone" });
    if ("granted" === e.state) return "granted";
    if ("prompt" === e.state)
      return chrome.runtime.sendMessage({ message: "requestMic" }), "prompt";
    {
      if ("denied" !== e.state)
        return (
          console.error(
            "An unexpected error occurred while checking microphone permission."
          ),
          "error"
        );
      let t = chrome.runtime.id,
        o = `chrome://settings/content/siteDetails?site=chrome-extension%3A%2F%2F${t}`;
      return (
        alert(`Looks like you denied microphone permissions for Voice Recorder.
    Now you should grant it manually.

    Right-click on Voice Recorder icon -> "View web permissions".
    Find microphone permission and select "Allow".

    You can use this link to navigate to the settings page:
    ${o}`),
        "denied"
      );
    }
  } catch (n) {
    return console.error("Error managing microphone permission:", n), "error";
  }
};
export const changeBadgeState = (e) => {
  switch (e) {
    case "start":
      chrome.action.setBadgeText({ text: "REC" }),
        chrome.action.setBadgeBackgroundColor({ color: "#DD0000" });
      break;
    case "pause":
      chrome.action.setBadgeText({ text: "II" }),
        chrome.action.setBadgeTextColor({ color: "white" }),
        chrome.action.setBadgeBackgroundColor({ color: "#33BB9A" });
      break;
    case "clear":
      chrome.action.setBadgeText({ text: "" });
      break;
    default:
      console.log("Unsupported action for badge state change.");
  }
};
export async function getCenterWindowPosition(e, t) {
  let o = {};
  if (chrome.system?.display?.getInfo) {
    let n = await new Promise((e, t) => {
        chrome.system.display.getInfo((t) => {
          e(t);
        });
      }),
      r = n.find((e) => e.isPrimary);
    (o.left = (r.bounds.width - e) / 2),
      (o.top = (r.bounds.height - t) / 2),
      (o.availLeft = r.bounds.left),
      (o.availTop = r.bounds.top);
  } else
    globalThis.screen
      ? ((o.left = (globalThis.screen.width - e) / 2),
        (o.top = (globalThis.screen.height - t) / 2),
        (o.availLeft = globalThis.screen.availLeft),
        (o.availTop = globalThis.screen.availTop))
      : ((o.left = 400), (o.top = 300), (o.availLeft = 0), (o.availTop = 0));
  return (
    (o.left = Math.round(o.left)),
    (o.top = Math.round(o.top)),
    (o.availLeft &&= Math.round(o.availLeft)),
    (o.availTop &&= Math.round(o.availTop)),
    o
  );
}
export function createWindow(e) {
  return new Promise((t, o) => {
    chrome.windows.create(e, (o) => {
      if (chrome.runtime.lastError) {
        let n = shallowClone(e);
        delete n.top,
          delete n.left,
          chrome.windows.create(n, (e) => {
            t(e);
          });
      } else t(o);
    });
  });
}
