// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let arr = []
    for (let i = n; i > 0; i--){
      arr.push(i)
    }
    return arr;
  };

//*****I'm getting through a lot of these katas pretty easily at times, but i look to see how i can refactor the code to make it much more efficient. From looking at the solutions, I came up with this as a solution:

//const reverseSequence = n => Array(n).fill(0).map((e,i) => n - i)
//*****This creates an array using the Array constructor and sets it's length to the number provided in the function, fills all values with 0, then maps the new values counting down from the number provided to being greater than 0. 


//=============================================================================================================


// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(x => !geese.includes(x))
  };

//*****I was able to fully understand why this works!! This was a valuable learning lesson!!


//=============================================================================================================


// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

const digitize = n => n.toString().split('').map(x => Number(x)).reverse()

//*****I completed this kata with relative ease. I'm not a full fan of separating the number to a string to make an array. In looking throught the solutions most answers did the same.


//=============================================================================================================


// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints. Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.

// Task
// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

// Example
// Input: 1,3,5,6,7,8

// Output: 1,2,3,4,5,6,7,8

const pipeFix = numbers => {
    let arr = []
    for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++){
      arr.push(i)
    }
    return arr
  }

//*****I was able to get this without too much difficulty. I also grasped the syntax of the Math.min() & Math.max() methods in respect to arrays.


//=============================================================================================================


// You probably know the 42 number as "The answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different.

// In the society he lived in, people-women in particular- had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.

// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was basically related to, and explained by sex.

// In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).

const toFreud = string => string == '' ? '' : string.split(' ').map(x => 'sex').join(' ')

//*****I was attending office hours while completing this kata and was advised that regex is heavy with string manipulation. He recommended that we complete the kata without regex first, then review the solutions to gain knowledge with completing WITH regex.