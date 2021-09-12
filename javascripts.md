# *JavaScripts* List

**NOTE:** All Scripts are listed infinitely. If you want to find a specific one, press `CTRL + F` or `CMD + F` depending on your keyboard, and then type name of the script you want to find.

[========]

##### YouTube Subscribers Count Changer
- Description: **Script that adds subs to any channel you want when you press keybind specified by you**
- Author: **UnitedCatdom**
- Version: **2.2.0**
- In-Repo: **[YouTube Subs Count Changer.js](https://github.com/CuteBladeYT/JavaScripts/blob/projects/YouTube%20Subs%20Count%20Changer.js)**
- Additional Info: **Default Keybind: `F4` | If any button doesn't work, press `CTRL + SHIFT + I` or `CMD + SHIFT + I`, open `Console` tab, then type `localStorage["changeSubsConfigKeybind"] = "F4";`. Then reload page and press F4 key.**

```js
// ==UserScript==
// @name         YouTube Subs Cheat
// @version      2.2.0
// @description  Cheats that adds subs to any channel you want when you press keybind specified by you!
// @author       UnitedCatdom
// @match        https://www.youtube.com/c/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com/
// @grant        none
// ==/UserScript==

var configKeybind = localStorage["changeSubsConfigKeybind"];
var keybind = localStorage["changeSubsKeybind"];

document.addEventListener('keydown', (event) => {
  var name = event.key;
  if (name == configKeybind) {
    return changeKeybind();
  }
}, false);

document.addEventListener('keydown', (event) => {
    var name = event.key;
    if (name == keybind) {
        return changeSubs();
    }
}, false);

function changeKeybind() {
    var setting = prompt(`
    1. Change Config Keybind
    2. Change Subs Keybind
    `);
    switch (setting) {
        case "1":
            var configKeybind = prompt("Type new Keybind. Example: F4 / F / 4");
            localStorage["changeSubsConfigKeybind"] = configKeybind;
            break;
        case "2":
            var keybind = prompt("Type new Keybind. Example: F4 / F / 4");
            localStorage["changeSubsKeybind"] = keybind;
            break;
    }
}

function changeSubs() {
    var newSubs = prompt("Set subs count to...?");
    document.getElementById("subscriber-count").innerHTML = "" + newSubs + " subscribers";
}
```

---
