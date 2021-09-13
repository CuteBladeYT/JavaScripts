// ==UserScript==
// @name         YouTube Subs Cheat
// @version      3.1.0
// @description  Cheats that adds subs to any channel you want when you press keybind specified by you!
// @author       UnitedCatdom
// @match        https://www.youtube.com/c/*
// @match        https://www.youtube.com/channel/*
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
