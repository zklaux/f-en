// For responsiveness
var myMedia = window.matchMedia("(max-width: 720px)");

units = {
  "canada": ["SPE Alpha", "SPE Beta", "SPE Gamma", "SPE Hulk"],
  "uruguai": ["SPE Gamma", "SPE Hulk", "SPE Sigma"],
  "korea": ["SPE Beta", "SPE Gamma", "SPE Magna"]
}


function printUnits(id) {
  var div = document.getElementById("units-blt");
  units[id].forEach(unit => {
    div.innerHTML = div.innerHTML + "<p class='item'>" + unit + "</p>";
  })
  div.innerHTML = div.innerHTML + "<p class='close' onclick='closeConsole()'>Fechar</p>"
}

function mapClick(divid) {
  var div = document.getElementById(divid);

  var name = document.getElementById('country-name');
  name.textContent = div.getAttribute('name');

  var x = document.getElementById('showDetails');
  x.style.opacity = 1;

  if (myMedia.matches) {
    x.style.width = "80vw";
  }

  document.getElementById("units-blt").innerHTML = "";

  printUnits(divid, div)
}

function closeConsole() {
  var x = document.getElementById('showDetails');
  x.style.opacity = 0;
  
  if (myMedia.matches) {
    x.style.width = 0;
  }
}


