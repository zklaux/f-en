// For responsiveness
var myMedia = window.matchMedia("(min-width: 720px)");

if (myMedia.matches) {
  

function hoverdiv(e, divid) {
  var left = e.clientX + "px";
  var top = e.clientY + "px";

  var div = document.getElementById(divid);

  div.style.left = left;
  div.style.top = top;

  $("#" + divid).toggle();
}
} else {
  function hoverdiv(e, divid) {
    console.log(divid + " not to be disturbed in this media format and in the event of " + e);
  }
}

