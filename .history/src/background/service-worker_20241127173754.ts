console.log("this is background service worker file", chrome);

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command: ${command}`);
  chrome.action.getPopup({}, (popup) => {
    console.log(`Popup: ${popup}`);
  });
});
