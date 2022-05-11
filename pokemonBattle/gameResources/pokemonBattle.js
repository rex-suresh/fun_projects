const fs = require('fs');

const attack = function (hit, def) {
  if (def.def > 0) {
    def.def = def.def - hit.attack;
  } else {
    def.hp = def.hp - hit.attack;
  }
  hit.hitStatus = false;
};

const shield = function (hit, def) {
  if (def.shields > 0) {
    def.def = def.def + hit.attack;
    def.shields--;
    def.shieldStatus = false;
  }
};

const fight = function (hit, def) {
  if (def.shieldStatus) {
    shield(hit, def);
  }
  attack(hit, def);
};

const attackActive = function (players) {
  for (const player in players) {
    if (players[player].hitStatus) {
      return true;
    }
  }
};

const playersAlive = function (players) {
  for (const player in players) {
    if (players[player].hp <= 0) {
      return false;
    }
  }
  return true;
};

const battle = function (players) {
  const { player1, player2 } = players;

  while (attackActive(players) && playersAlive(players)) {
    let hit = player1;
    let def = player2;
    
    if (player2.hitStatus) {
      hit = player2;
      def = player1;
    }

    fight(hit, def);
  }
  return players;
};

const playGame = function (statsFile) {
  const players = JSON.parse(
    fs.readFileSync(statsFile, 'utf8'));
  
  const battleResults = battle(players);
  
  fs.writeFileSync(statsFile,
    JSON.stringify(battleResults), 'utf8');
};

// playGame();
exports.playGame = playGame;
