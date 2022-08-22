// DESCRIPTION:
// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

//P: input will be two strings (one word and one letter) the first argument can be an empty string
//R: return should be the number of times the letter provided as the second argument appears in the string
//E: strCount('Hello', 'o') => 1
  // strCount('hello', 'l') => 2
  // strCount('', 'z') => 0

const strCount = (string, letter) => {
    // turn string into an array | [...string]
    // filter array comparing to the letter | .filter(x => x == letter)
    // return the length of the array | .length (the || 0 isn't needed as the .length property will return 0 if the array has no length)
    return [...string].filter(l => l == letter).length
}

//=============================================================================================================

// DESCRIPTION:
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

//P: input will be an array of integers and a single integer
//R: output should be the remaining elements of the array that can be divided by the integer
//E: divisibleBy([1, 2, 3, 4, 5, 6], 2) => [2, 4, 6]
  // divisibleBy([3, 4, 6, 8, 9, 12], 3) => [3, 6, 9, 12]
  // divisibleBy([3, 4, 5, 6, 7], 8) => []
//Question: If the list isn't divisible by the integer, should the output be an empty array? Can the original array be modified or can a new array be returned?

const divisibleBy = (numbers, divisor) => {
    // filter through the given array to determine if the element is divisible by the divisor
        // .filter(int => !(int % divisor))
    // return the results
    return numbers.filter(int => !(int % divisor))
}