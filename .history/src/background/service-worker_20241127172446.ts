console.log("this is background service worker file");

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command: ${command}`);
});
