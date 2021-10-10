document.addEventListener('keydown', (event) => {
  var name = event.key;
  if (name === 'Control') {
    return changeSubs();
  }
}, false);

// document.getElementsByClassName("yt-img-shadow").onclick = "changeSubs()";
// return changeSubs();

function changeSubs() {
    var newSubs = prompt("Set subs count to...?");
    document.getElementById("subscriber-count").innerHTML = "" + newSubs + " Subscribers";
}
