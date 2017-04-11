var canvas = document.getElementById('canvas');

var simSelect = document.getElementById('SimulationSelect');

var artboardSelect = document.getElementById('ArtboardSelect');

var opt1 = document.createElement('option');
opt1.value = "abid_UseWindow";
opt1.innerHTML = "Use Window";
artboardSelect.appendChild(opt1);

for (var i = 0; i < artboardNames.length; i++){
    var opt = document.createElement('option');
    opt.value = "abid_" + artboardNames[i];
    opt.innerHTML = artboardNames[i];
    artboardSelect.appendChild(opt);
}

simSelect.addEventListener("change", function(event) {
  window.status = simSelect.value;
  colorBlindId = simSelect.value;
  runSimulation();
});

artboardSelect.addEventListener("change", function(event) {
  if (artboardSelect.value === 'abid_UseWindow') {
    canvas.classList.add('canvas--window');
  } else {
    canvas.classList.remove('canvas--window');
  }
  window.status = artboardSelect.value;
});