const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  if (damage === 0) {
    alert('You missed??');
  } else if (damage === 1) {
    alert('You dropped ' + damage + ' point of damage on that beesh!');
  } else {
    alert('You dropped ' + damage + ' points of damage on that beesh!');
  }
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  if (playerDamage === 0) {
    alert('They missed!!');
  } else if (playerDamage === 1) {
    alert('Ramsey sliced you for ' + playerDamage + ' point of damage!');
  } else {
    alert('Ramsey sliced you for ' + playerDamage + ' points of damage!');
  }
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0) {
    alert('You Won');
  } else if (currentPlayerHealth <= 0) {
    alert('You lost!');
  }
}

attackBtn.addEventListener('click', attackHandler);
