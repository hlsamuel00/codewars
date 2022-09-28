// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//P: input will be an array of integers
//R: output should be the integer that is occurs an odd number of times
//E: findOdd([7]) => 7
  // findOdd([0]) => 0
  // findOdd([1,1,2]) => 2
  // findOdd([0,1,0,1,0]) => 0
  // findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]) => 4

const findOdd = (arr) => {
    // count the number of occurrences of each instance of the array and store in a variable (obj = arr.reduce())
        const obj = arr.reduce((acc,el) => (acc[el] = (acc[el] || 0) + 1) && acc, {})
    // determine unique values (Object.keys(variable))
    // find value that is odd (.find(el => variable[el] % 2))
    // convert value to a number (+ || Number())
    //EDGE CASE: due to find returning undefined if not included add a conditional to return "No Value Found"
    // return the result
    return +(Object.keys(obj).find(el => obj[el] % 2)) || "No value found"
}