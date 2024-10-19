chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason.search(/install/g) === -1) {
      return
  }
  chrome.tabs.create({
      url: chrome.runtime.getURL("welcome.html"),
      active: true
  })
})

chrome.sidePanel
          .setPanelBehavior({ openPanelOnActionClick: true })
          .catch((error) => console.error(error));

