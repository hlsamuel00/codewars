// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//P: input will be a string of numbers separated by a space
//R: return should be a string of teh highest and lowest numbers in the string
//E: highAndLow("1 2 3 4 5");  // return "5 1"
  // highAndLow("1 2 3 4 5");  // return "5 1"
  // highAndLow("1 2 -3 4 5"); // return "5 -3"
  // highAndLow("1 9 3 4 -5"); // return "9 -5"

const highandLow = string =>{
    // convert the string to an array of numbers (Array.from(string.split(/\s/g)))
    // map over the array to convert the strings to numbers (, el => +el)
    // store array in a variable (const arr = ...)
    // get the max and min (Math.max(...arr) && Math.min(...arr))
    // return the result
    const arr = Array.from((string.split(/\s/g)), el => +el)
    return `${Math.max(...arr)} ${Math.min(...arr)}`
}

//=============================================================================================================


// DESCRIPTION:
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

//P: input will be a string
//R: output should be the middle character of the string if the string.length is odd and the middle 2 characters if the string.length is even
//E: getMiddle('A') => 'A'
  // getMiddle('middle') => 'dd'
  // getMiddle('testing') => 't'

const getMiddle = string => {
    // determine the length of the string, divide it by 2, and store value in a variable (const length = string.length / 2 - 1))
    // create conditional to determine the responses to provide (!string.length % 2 ?)
    // create outcomes for both even and odd numbers ( string.slice(length, length+1): string.charAt(Math.round(length)) )
    // return the result
    const length = string.length / 2 - 1
    return !(string.length % 2) ? string.slice(length, length + 2): string.charAt(Math.round(length))
}

// or

const getMiddle = string =>{
    const length = Math.round(string.length / 2 - 1)
    return string.slice(length, length + (string.length % 2 ? 1 : 2))
}

//=============================================================================================================
