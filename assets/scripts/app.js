const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 11;
const PLAYER_HEAL_VALUE = 18;

const ATTACK_MODE = 'ATTACK'
const STRONG_ATTACK_MODE = 'STRONG_ATTACK'
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK'
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK'
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK'
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL'
const LOG_EVENT_GAME_OVER = 'GAME_OVER'


const enteredValue = prompt('Maximum life for you and the monster.', '100')

let chosenMaxLife = parseInt(enteredValue);

let battleLog =[]

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife =true

adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, monsterHealth, playerHealth) {
 let logEntry;

 logEntry = {
  event: event,
  value: value,
  finalMonsterHealth: monsterHealth,
  finalPlayerHealth: playerHealth
}

switch (event) {
case  LOG_EVENT_PLAYER_ATTACK:
  logEntry.target= 'MONSTER'
  break;
  case LOG_EVENT_PLAYER_STRONG_ATTACK:
    logEntry = {
      event: event,
      value: value,
      target: "MONSTER",
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    }
    break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry = {
        event: event,
        value: value,
        target: "PLAYER",
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
      }
      break;
      case LOG_EVENT_PLAYER_HEAL:
        logEntry = {
          event: event,
          value: value,
          target: "PLAYER",
          finalMonsterHealth: monsterHealth,
          finalPlayerHealth: playerHealth
        }
        break;
        case LOG_EVENT_GAME_OVER:
          logEntry = {
            event: event,
            value: value,
            
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
          }


}

// ==============================  translated the below if statement into the above switch case for practice ======================================

//  if (event === LOG_EVENT_PLAYER_ATTACK) {
//   logEntry.target= 'MONSTER'
   
//  } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
//   logEntry = {
//     event: event,
//     value: value,
//     target: "MONSTER",
//     finalMonsterHealth: monsterHealth,
//     finalPlayerHealth: playerHealth
//   }
  
// } else if (event === LOG_EVENT_MONSTER_ATTACK) {
//   logEntry = {
//     event: event,
//     value: value,
//     target: "PLAYER",
//     finalMonsterHealth: monsterHealth,
//     finalPlayerHealth: playerHealth
//   }
  
// } else if (event === LOG_EVENT_PLAYER_HEAL) {
//   logEntry = {
//     event: event,
//     value: value,
//     target: "PLAYER",
//     finalMonsterHealth: monsterHealth,
//     finalPlayerHealth: playerHealth
//   }
  
// } else if (event === LOG_EVENT_GAME_OVER) {
//   logEntry = {
//     event: event,
//     value: value,
    
//     finalMonsterHealth: monsterHealth,
//     finalPlayerHealth: playerHealth
//   }
  
// }
battleLog.push(logEntry)
}


function reset() {
  currentMonsterHealth = chosenMaxLife;
 currentPlayerHealth = chosenMaxLife;
 resetGame()
}

function endRound() {
  const initalPlayerHealth = currentPlayerHealth
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(LOG_EVENT_MONSTER_ATTACK, 
    playerDamage, 
    currentMonsterHealth, 
    currentPlayerHealth)

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false; 
    removeBonusLife();
      currentPlayerHealth = initalPlayerHealth;
      setPlayerHealth(initalPlayerHealth)
      ('You have invoked Soul Restore')
  }
  if (playerDamage === 0) {
    alert('They missed!!');
  } else if (playerDamage === 1) {
    alert('Ramsey sliced you for ' + playerDamage + ' point of damage!');
  } else {
    alert('Ramsey sliced you for ' + playerDamage + ' points of damage!');
  }
  
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Won');
    writeToLog(LOG_EVENT_GAME_OVER, 
      'BROWNCOAT WON', 
      currentMonsterHealth, 
      currentPlayerHealth)
  
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');

    writeToLog(LOG_EVENT_GAME_OVER, 
      'THE ALLIANCE WON', 
      currentMonsterHealth, 
      currentPlayerHealth)
    reset()
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You're both dead!");
    writeToLog(LOG_EVENT_GAME_OVER, 
      'WE"RE ALL DEAD', 
      currentMonsterHealth, 
      currentPlayerHealth)
    reset()
  }
}

function attackMonster(mode) {
  const maxDamage = mode === ATTACK_MODE
   ? ATTACK_VALUE
    : STRONG_ATTACK_VALUE
  const logEvent = mode === ATTACK_MODE
   ? LOG_EVENT_PLAYER_ATTACK 
   : LOG_EVENT_PLAYER_STRONG_ATTACK


  // below code is the same as above. above I refactored with ternary operator
  // if (mode === ATTACK_MODE) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK;
  // } else if (mode == STRONG_ATTACK_MODE) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
  // }
  const damage = dealMonsterDamage(maxDamage);
  if (damage === 0) {
    alert('You missed??');
  } else if (damage === 1) {
    alert('You dropped ' + damage + ' point of damage on that beesh!');
  } else {
    alert('You dropped ' + damage + ' points of damage on that beesh!');
  }
  currentMonsterHealth -= damage;
  writeToLog(logEvent, 
    damage, 
    currentMonsterHealth, 
    currentPlayerHealth)
  // endRound();
}

function attackHandler() {
  attackMonster(ATTACK_MODE);
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
  endRound()
}

function strongAttackHandler() {
  attackMonster(STRONG_ATTACK_MODE);
  endRound()
}

function lazarusHandler() {
let healValue;
if (currentPlayerHealth >= chosenMaxLife - PLAYER_HEAL_VALUE) {
  alert("You can't heal past your max health");
  healValue = chosenMaxLife - currentPlayerHealth
} else {
  healValue = PLAYER_HEAL_VALUE
}
  increasePlayerHealth(PLAYER_HEAL_VALUE);
  currentPlayerHealth += healValue
  alert('You healed by ' + PLAYER_HEAL_VALUE + ' points')
  writeToLog(LOG_EVENT_PLAYER_HEAL, 
    healValue, 
    currentMonsterHealth, 
    currentPlayerHealth)
  endRound();
}

function printLogHandler() {
  for (let i = 0; i < 4; i++) {
    console.log('---------------')
  }
for (const log of battleLog) {
  console.log(log)
}
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', lazarusHandler);
logBtn.addEventListener('click', printLogHandler)
