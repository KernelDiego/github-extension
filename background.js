chrome.action.onClicked.addListener(function (tab) {
  const url = tab.url

  const replacements = {
    "github.com": "github1s.com",
    "github1s.com": "github.dev",
    "github.dev": "github.com",
  }
  
  const replacement = Object.keys(replacements).find(from => url.includes(from))

  if (replacement) {
    const newUrl = url.replace(replacement, replacements[replacement])
    chrome.tabs.update(tab.id, { url: newUrl })
  }
})