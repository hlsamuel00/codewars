//P: input will be two objects
    //each object will have a name, health, and damagePerAttack
    //name will be a string
    //health and damagePerAttack will both be positive integers

//R: return will be the outcome of the fight between the two fighters. 

//E: declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0){
      if (firstAttacker == fighter1.name){
        if (fighter1.health > 0){ fighter2.health -= fighter1.damagePerAttack }
        if (fighter2.health > 0){ fighter1.health -= fighter2.damagePerAttack }
      }
      if (firstAttacker == fighter2.name){
        if (fighter2.health > 0){ fighter1.health -= fighter2.damagePerAttack }
        if (fighter1.health > 0){ fighter2.health -= fighter1.damagePerAttack }
      }
    }
    return fighter1.health > fighter2.health ? fighter1.toString() : fighter2.toString()
}

//*****I was able to get this kata, but i didn't use the pseudocode *facepalm*. I am extremely proud of my code though. 