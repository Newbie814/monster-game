const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.floor(Math.random() * damage);
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.floor(Math.random() * damage);
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}

let sum = 0;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    sum = sum + i + j;
    break;
  }
}
console.log(sum);

let sum = 0;
for (let i = 1; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    sum = sum + i + j;
    break;
  }
}
console.log(sum);

let sum = 1;
for (let i = 2; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    sum = sum + i + j;
    break;
  }
}
console.log(sum);

let sum = 3;
for (let i = 3; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    sum = sum + i + j;
    break;
  }
}
console.log(sum);

let sum = 4;
for (let i = 4; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    sum = sum + i + j;
    break;
  }
}
console.log(sum);

let sum = 0;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    sum = sum + i + j;
    console.log('before continue', sum);
    continue;
    console.log('after', sum);
  }
  console.log('outer loop', sum);
}
console.log(sum);

let sum = 1;
for (let i = 1; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    sum = sum + i + j;
    continue;
  }
}
console.log(sum);

let sum = 3;
for (let i = 2; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    sum = sum + i + j;
    continue;
  }
}
console.log(sum);

let sum = 6;
for (let i = 3; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    sum = sum + i + j;
    continue;
  }
}
console.log(sum);

let sum = 10;
for (let i = 4; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    sum = sum + i + j;
    continue;
  }
}
console.log(sum);

let sum = 0;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    sum = sum + i + j;
    continue;
  }
}
console.log(sum);


let sum = 0;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 2; j++) {
    sum = sum + i + j;
    console.log('before continue', sum);
    continue;
    console.log('after', sum);
  }
  console.log('outer loop', sum);
}
console.log(sum);
VM606:5 before continue 0
VM606:5 before continue 1
VM606:9 outer loop 1
VM606:5 before continue 2
VM606:5 before continue 4
VM606:9 outer loop 4
VM606:5 before continue 6
VM606:5 before continue 9
VM606:9 outer loop 9
VM606:5 before continue 12
VM606:5 before continue 16
VM606:9 outer loop 16
VM606:5 before continue 20
VM606:5 before continue 25
VM606:9 outer loop 25
VM606:11 25
