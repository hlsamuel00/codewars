// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


const countSheeps = arrayOfSheep => arrayOfSheep.reduce((acc,x) => x == true ? acc+=1 : acc, 0)

//*****I completed this kata on almost the first try. I messed up on the accumulator increment trying to use syntactical sugar. 


//=============================================================================================================


// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


const even_or_odd = number => number % 2 == 0 ? 'Even' : 'Odd'


//******I was reviewing the coding solutions and came across a refactored code: 
    //const even_or_odd = number => number % 2 ? 'Odd' : 'Even'
//******This shows the values reversed and I understood it as the check returns 0 or 1 where 0 is false and 1 is true. 0 is a falsy


//=============================================================================================================


// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = str => Number(str)

//*****I was able to complete this kata with ease. 


//=============================================================================================================


//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


const boolToWord = bool => bool ? 'Yes' : 'No'

//*****This was very easy to accomplish, this also checks whether the entered value is a truthy or a falsy!!


//=============================================================================================================

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3


const getRealFloor = n => n <= 0 ? n : n < 13 ? n - 1 : n - 2

//*****I was able to get this kata on the first try as well. This was very easy to accomplish.


//=============================================================================================================