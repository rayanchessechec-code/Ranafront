const bots = [];

function spawnBots(count = 5) {
  for (let i = 0; i < count; i++) {
    bots.push({
      id: i,
      gold: 80 + Math.floor(Math.random() * 40),
      cities: 1,
      ports: 0,
      airports: 0,
      factories: 0,
      troops: 10,
      color: `hsl(${Math.random() * 360}, 70%, 50%)`
    });
  }
  log(`${count} bots spawnés`);
}

spawnBots();