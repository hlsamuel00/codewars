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