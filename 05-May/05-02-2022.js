// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

const hoopCount = (n) => n > 9 ? "Great, now move on to tricks" : "Keep at it until you get it"

//*****This was very easy to complete!


//=============================================================================================================


    //======7kyu======

// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

const bingo = (a) => Array(2,7,9,14,15).filter(x => !a.includes(x)).length == 0 ? 'WIN' : 'LOSE'

//*****This one was a bit trickier to figure out, but I was able to get it through some deep thinking getting my daughter. Looking through the solutions, versus using filter(), they used every() which does the same as filter, but doesn't return a new array which saved me from the .length property.