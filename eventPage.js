chrome.browserAction.onClicked.addListener(_ => {
    chrome.tabs.executeScript({
        'file': 'contentScript.js'
    });
});
