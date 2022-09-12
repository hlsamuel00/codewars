// DESCRIPTION:
// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

Array.prototype.filter = function(func){
    let newArr = []
    for (el of this){
      if (func(el)){
        newArr.push(el)
      }
    }
    return newArr
}

// OR

Array.prototype.filter = function(func){
    return this.reduce((acc,el) => func(el) ? [...acc, el] : acc, [])
}

//=============================================================================================================

// DESCRIPTION:
// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

//P: input will be an array and optionally an integer
//R: return should be the the first element if the integer is not defined, if the integer is defined, the element should be length of the number provided.
//E: first(arr) //=> ['a'];
  // first(arr, 2) //=> ['a', 'b']
  // first(arr, 3) //=> ['a', 'b', 'c'];
  // first(arr, 0) //=> [];

const first = (arr, idx = 1) => {
    // slice the first index of the array and set idx = 1 or the value entered (.slice(0, idx))
    // return the result
    return arr.slice(0, idx)
}

//=============================================================================================================

// DESCRIPTION:
// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
// This is a modification on the Kata: Array2Binary addition hope you like it

//P: input will be an array of numbers and non-numbers
//R: return should be the binary form of the numbers added together. or '0' for nothing
//E: arr2bin([1,2]) == '11'
  // arr2bin([1,2,'a']) == '11'
  // arr2bin([]) == '0'

const arr2bin = (arr) => {
    // filter out non numbers from array (arr.filter(el => parseInt(el)))
    // reduce elements to a single number (.reduce((acc, el) => acc + el, 0))
        // combine the filter and reduce together (.reduce((acc,el) => parseInt(el) ? acc + el : el, 0))
    // convert number received to binary (.toString(2) - base 2 in to string converts the string to binary)
    // return the result
    // EDGE CASE: to account for NaN (arr.includes(NaN) ? 'NaN' : )
    return arr.includes(NaN) ? 'NaN' : arr.reduce((acc,el) => parseInt(el) ? acc + el : acc, 0).toString(2)
}

// After Refactoring:
const arr2bin = (arr) => arr.reduce((acc,el) => typeof(el) === 'number' ? acc + el : el, 0)

//=============================================================================================================

// DESCRIPTION:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4


//P: input will be an array of 1's and 0's
//R: output should be the array of binary converted to a number 
//E: binaryArrayToNumber([0, 0, 0, 1]) => 1
  // binaryArrayToNumber([0, 0, 1, 0]) => 2
  // binaryArrayToNumber([0, 1, 0, 1]) => 5
  // binaryArrayToNumber([1, 0, 0, 1]) => 9
  // binaryArrayToNumber([0, 0, 1, 0]) => 2
  // binaryArrayToNumber([0, 1, 1, 0]) => 6
  // binaryArrayToNumber([1, 1, 1, 1]) => 15
  // binaryArrayToNumber([1, 0, 1, 1]) => 11
//Question: Will the array always be 1's and 0's

const binaryArrayToNumber = (arr) => {
    // combine the array into a string (arr.join(''))
    // convert string binary to an integer (parseInt(arr.join(''), 2))
    // return the result
    return parseInt(arr.join(''), 2)
}