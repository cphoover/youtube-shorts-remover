chrome.webNavigation.onHistoryStateUpdated.addListener(
  function (details) {
    if (details.url && details.url.includes("/shorts/")) {
      chrome.tabs.update(details.tabId, { url: "https://www.youtube.com/" });
    }
  },
  { url: [{ urlMatches: "https://www.youtube.com/shorts/*" }] }
);
