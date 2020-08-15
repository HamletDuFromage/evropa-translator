const wl = document.querySelector("#wl");
const bl = document.querySelector("#bl");
const wlt = document.querySelector("#wlt");
const blt = document.querySelector("#blt");

// Store the currently selected settings using browser.storage.local.
function storeSettings() {
  let whitelist = wl.value.split("\n");
  let blacklist = bl.value.split("\n");
  let whitelisttoggle = wlt.checked;
  let blacklisttoggle = blt.checked;
  browser.storage.local.set({
    whitelist,
    blacklist,
    whitelisttoggle,
    blacklisttoggle
  });
}

// Update the options UI with the settings values retrieved from storage,
// or the default settings if the stored settings are empty.
function updateUI(restoredSettings) {
  wl.value = restoredSettings.whitelist.join("\n");
  bl.value = restoredSettings.blacklist.join("\n");
  //if(restoredSettings.blacklisttoggle)  blt.checked = true;
  //else                                  wlt.checked = false;
  wlt.checked = restoredSettings.whitelisttoggle;
  blt.checked = restoredSettings.blacklisttoggle;
}

function onError(e) {
  console.error(e);
}

// On opening the options page, fetch stored settings and update the UI with them.
browser.storage.local.get().then(updateUI, onError);

// Whenever the contents of the textarea changes, save the new values
wl.addEventListener("change", storeSettings);
bl.addEventListener("change", storeSettings);
blt.addEventListener("change", storeSettings);
wlt.addEventListener("change", storeSettings);