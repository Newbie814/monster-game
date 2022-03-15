const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 11;
const PLAYER_HEAL_VALUE = 18;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  if (playerDamage === 0) {
    alert('They missed!!');
  } else if (playerDamage === 1) {
    alert('Ramsey sliced you for ' + playerDamage + ' point of damage!');
  } else {
    alert('Ramsey sliced you for ' + playerDamage + ' points of damage!');
  }
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Won');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You're both dead!");
  }
}

function attackMonster(attackStrength) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode == 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  if (damage === 0) {
    alert('You missed??');
  } else if (damage === 1) {
    alert('You dropped ' + damage + ' point of damage on that beesh!');
  } else {
    alert('You dropped ' + damage + ' points of damage on that beesh!');
  }
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler() {
  attackMonster('ATTACK');
  // moved into the other function to just use maxdamge to change function based on attack params
  // const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
  // if (damage === 0) {
  //   alert('You missed??');
  // } else if (damage === 1) {
  //   alert('You dropped ' + damage + ' point of damage on that beesh!');
  // } else {
  //   alert('You dropped ' + damage + ' points of damage on that beesh!');
  // }
  // currentMonsterHealth -= damage;
  // const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  // if (playerDamage === 0) {
  //   alert('They missed!!');
  // } else if (playerDamage === 1) {
  //   alert('Ramsey sliced you for ' + playerDamage + ' point of damage!');
  // } else {
  //   alert('Ramsey sliced you for ' + playerDamage + ' points of damage!');
  // }
  // currentPlayerHealth -= playerDamage;
  // if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
  //   alert('You Won');
  // } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
  //   alert('You lost!');
  // } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
  //   alert("You're both dead!");
  // }
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}

function lazarusHandler() {
  increasePlayerHealth(PLAYER_HEAL_VALUE);
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', lazarusHandler);
