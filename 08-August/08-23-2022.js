// DESCRIPTION:
// If/else syntax debug
// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.

// The code provided: 
function checkAlive (health) {
    if () {
      health < 0
      return false
    } else () {
      return true
    }
}

// The updated code:
function checkAlive(health) {
    if(health < 1) {
      return false
    } else {
      return true
    }
}

// My code:
const checkAlive = health => health > 0


//=============================================================================================================

// DESCRIPTION:
// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

// For example(Input --> Output):

// "anyone else" --> 0
// "Zach" --> 18

//P: input will be a string a name of a programmer
//R: output should be an integer for the number of lightsabers owned. Zach is the only owner of lightsabers.
//E: howManyLightsabersDoYouOwn('Branden') => 0
  // howManyLightsabersDoYouOwn('Harvey') => 0
  // howManyLightsabersDoYouOwn('Zach') => 18

const howManyLightsabersDoYouOwn = name =>{
    // make name lowercase to ensure there are no issues with alternate capitalization (name.toLowerCase())
    // set up conditional to determine if the name matches and provide the correct response
    // include a part of the conditional that tests for an empty argument
    //return the results
    return name && name.toLowerCase() == 'zach' ? 18 : 0
}

//=============================================================================================================
