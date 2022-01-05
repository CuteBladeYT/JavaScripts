function qs(obj, sel) {
  if (sel) {
    if (sel == -1) {
      return document.querySelectorAll(obj);
    } else {
      return document.querySelectorAll(obj)[sel];
    }
  } else {
    return document.querySelector(obj);
  }
}




/*

  Name:     Better Selector
  Author:   UnitedCatdom
  Version:  v1.1
  Github:   https://github.com/CuteBladeYT/JavaScripts/edit/better-js/betterSelector.js



  Usage: qs(object, selector)
  object:   HTML Element's CSS Path. i.e. ".class #id element.withClass#andId"
  selector: normally you would use document.querySelectorAll("element")[4], for example,
            now you just need to type any int > 0 (higher than zero), or -1 to disable.
            (document.querySelectorAll("element"))

*/
