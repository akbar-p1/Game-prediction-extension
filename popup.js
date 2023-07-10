chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const activeTab = tabs[0];
    if (activeTab && activeTab.url.includes("https://game-prediction-kr.web.app")) {
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        files: ["content.js"]
      }, () => {
        if (chrome.runtime.lastError) {
          alert("An error occurred: " + chrome.runtime.lastError.message);
        }
      });
    } else {
      chrome.tabs.create({ url: "https://game-prediction-kr.web.app" }, function(newTab) {
        chrome.scripting.executeScript({
          target: { tabId: newTab.id },
          files: ["content.js"]
        }, () => {
          if (chrome.runtime.lastError) {
            alert("An error occurred: " + chrome.runtime.lastError.message);
          }
        });
      });
    }
  });
  