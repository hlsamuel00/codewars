// DESCRIPTION:
// Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

//P: input will be a non-negative integer
//R: output should be the integer converted to binary
//E: toBinary(1) => 1
  // toBinary(5) => 101
  // toBinary(11) => 1011

const toBinary = num => {
    // convert number to string with a base of 2 (num.toString(2))
    // convert the string to a number (parseInt(), Number(), || +)
    // return the result
    return +num.toString(2)
}

//=============================================================================================================

// DESCRIPTION:
// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.

// Code Provided:
function correctTail(bod, tail ;
  
    sub = body.substr(bodylength-(tail.length)
    
    if sub = tail) ;
      return true
    }
    else 
      return false
    
// Updated Code:
function correctTail(body, tail){ 
    const sub = body.substr(body.length-tail.length)
    if (sub == tail) {
      return true
    }
    else {
      return false
    }
}

// My Code:
const correctTail = (body,tail) => body.slice(-1) === tail

// OR

const correctTail = (body, tail) => body.endsWith(tail)

//=============================================================================================================

// DESCRIPTION:
// Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

// Code provided:
function main [verb, noun]
  return verb + noun
}

// Updated code:
function main (verb,noun){
    return verb + noun
}

// My code:
const main = (verb,noun) => verb + noun

//=============================================================================================================

