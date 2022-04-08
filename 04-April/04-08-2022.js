// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.

function magNumber(info){
    const dict = new Map([
      ["PT92", 17],
      ["M4A1", 30],
      ["M16A2", 30],
      ["PSG1", 5]
    ]);
    return Math.ceil(info[1] * 3 / dict.get(info[0]));
  }
//*****I wasn't able to get this kata. The solution above was using the map object that i was attempting to use in my solution. I want to review this kata later to determine if i'm able to further understand it as i progress. I have starred the kata. 


//=============================================================================================================


// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - sonYearsOld * 2)

//*****Working through the math of this was the tricky part, but i was able to get it figured out!!


//=============================================================================================================


