function qs(object) {
  return document.querySelector(object);
}

function qsA(object, selector) {
  if (selector) {
    return document.querySelectorAll(object)[selector];
  } else {
    return document.querySelectorAll(object);
  };
}
