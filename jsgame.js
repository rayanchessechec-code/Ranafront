const canvas = document.getElementById('map');
const ctx = canvas.getContext('2d');

let player = {
  gold: 100,
  pop: 10,
  popMax: 10,
  cities: 1,
  ports: 0,
  airports: 0,
  factories: 0,
  troops: 10,
  fighters: 0,
  attackPlanes: 0
};

function updateUI() {
  document.getElementById('gold').textContent = player.gold;
  document.getElementById('pop').textContent = `${player.pop}/${player.popMax}`;
  document.getElementById('cities').textContent = player.cities;
  document.getElementById('ports').textContent = player.ports;
  document.getElementById('airports').textContent = player.airports;
}

function buyCity() {
  if (player.gold >= 50) {
    player.gold -= 50;
    player.cities += 1;
    player.popMax += 5;
    player.pop += 5;
    log("Ville achetée !");
    updateUI();
  } else {
    log("Pas assez d'or !");
  }
}

function buyPort() {
  if (player.gold >= 75) {
    player.gold -= 75;
    player.ports += 1;
    log("Port acheté !");
    updateUI();
  } else {
    log("Pas assez d'or !");
  }
}

function buyAirport() {
  if (player.gold >= 75) {
    player.gold -= 75;
    player.airports += 1;
    log("Aéroport acheté !");
    updateUI();
  } else {
    log("Pas assez d'or !");
  }
}

function buyFactory() {
  if (player.gold >= 100) {
    player.gold -= 100;
    player.factories += 1;
    log("Usine achetée !");
    updateUI();
  } else {
    log("Pas assez d'or !");
  }
}

function log(msg) {
  const logBox = document.getElementById('chat-log');
  logBox.innerHTML += `<div>${new Date().toLocaleTimeString()} - ${msg}</div>`;
  logBox.scrollTop = logBox.scrollHeight;
}

// revenus
setInterval(() => {
  player.gold += player.cities * 2 + player.factories * 3 + player.ports * 1 + player.airports * 1;
  log("+ or");
  updateUI();
}, 10000);

updateUI();