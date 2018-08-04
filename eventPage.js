chrome.browserAction.onClicked.addListener(_ => {
    chrome.tabs.executeScript({
        'file': 'contentScript.js'
    });

    chrome.browserAction.setBadgeBackgroundColor({'color': 'green'});
    chrome.browserAction.setBadgeText({'text': 'ok'});
    setTimeout(chrome.browserAction.setBadgeText, 999, {'text': ''});
});
