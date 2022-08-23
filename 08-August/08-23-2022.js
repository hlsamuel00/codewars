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

// DESCRIPTION:
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

//P: input will be an integer between 1 and 10
//R: output should be a list of the multiplication table from 1 to 10 with the number provided
//E: multiTable(5) => // 1 * 5 = 5
                      // 2 * 5 = 10
                      // 3 * 5 = 15
                      // 4 * 5 = 20
                      // 5 * 5 = 25
                      // 6 * 5 = 30
                      // 7 * 5 = 35
                      // 8 * 5 = 40
                      // 9 * 5 = 45
                      // 10 * 5 = 50

const multiTable = number => {
    //set up an array length of 10 Array.from({length: 10})
        // use the map to set the element to equal the full multiplication table (_,i) =>
    // join them using the new line syntax (.join(\n))
    // return the result
    return Array.from({length: 10}, (_,i) => `${++i} * ${number} = ${i * number}`).join('\n')
}

//=============================================================================================================