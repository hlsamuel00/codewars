// DESCRIPTION:
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

//P: input will be three number type arguments
//R: return should be a boolean returning whether the values are divisible by both numbers (x and y).
//E: isDivisible(3, 1, 3) =>  true because   3 is divisible by 1 and 3
  // isDivisible(12, 2, 6) =>  true because  12 is divisible by 2 and 6
  // isDivisible(100, 5, 3) => false because 100 is not divisible by 3
  // isDivisible(12, 7, 5) => false because  12 is neither divisible by 7 nor 5
//Questions: Will all inputs be numbers? Will they all be positive and/or not equal to 0? 

const isDivisible = (n,x,y) => {
    //determine if n is divisible by x (n % x === 0) or !(n % x)
    //determine if n is divisible by y (n % y === 0) or !(n % y) 
    //return results 
    return !(n % x) && !(n % y)
}

//=============================================================================================================

// DESCRIPTION:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

//P: input will be an array of integers
//R: return should be an array of inverted integers(positives to negatives and vice versa)
//E: invert([1,2,3,4,5]) => [-1,-2,-3,-4,-5]
  // invert([1,-2,3,-4,5]) => [-1,2,-3,4,-5]
  // invert([]) => []
//Questions: Can I return a new array or does the original array need to be mutated? Will all inputs be number types? 


const invert = (arr) => {
    //create a new array with the values inverted arr.map(x => -x)
    //return array
    return arr.map(x => -x)
}

//=============================================================================================================

// DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//P: input will be a string (a name of the individual)
//R: return should be a sting detailing whether the person plays or doesn't play the banjo. If the name starts with an R, the person does play, if the name doesn't start with an R, the person doesn't play.
//E: areYouPlayingBanjo('Ralph') => 'Ralph plays banjo'
  // areYouPlayingBanjo('Leon') => 'Leon doesn't play banjo'
  // areYouPlayingBanjo('ronald') => 'ronald plays banjo'
  // areYouPlayingBanjo('derek') => 'derek doesn't play banjo'


const areYouPlayingBanjo = (name) => {
    //determine the first letter of the string (name[0].toLowerCase())
    //set up conditional to add doesn't play or plays banjo (name[0].toLowerCase() == 'r' ? 'plays' : "does not play")
    //return the results
    return `${name} ${name[0].toLowerCase() == 'r' ? 'plays' : "does not play"} banjo`
}