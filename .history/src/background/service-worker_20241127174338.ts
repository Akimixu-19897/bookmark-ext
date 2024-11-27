console.log("this is background service worker file", chrome);

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command: ${command}`);
  if (command === "show_ext") {
    chrome.action.openPopup();
  }
});
