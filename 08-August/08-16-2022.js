// DESCRIPTION:
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

//P: input will be a single integer
//R: return should be an array of all of the integers from 1 to the number provided (excluding 0)
//E: monkeyCount(11) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  // monkeyCount(5) => [1, 2, 3, 4, 5]
  // monkeyCount(1) => [1]

const monkeyCount = n => {
    //set an array with the length of the number provided 
    //map the array with the number starting from 1 to the number provided
    //return the array
        return Array.from({length: n}, (_,i) => ++i)
}

//=============================================================================================================

// DESCRIPTION:
// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

//P: input will be an array of integers. the array could be empty
//R: output should be the sum of all integers excluding the greatest and least valued integer. If the argument is empty or an array of 1 element, return 0
//E: sumArray([6, 2, 1, 8, 10]) => 16
  // sumArray([1, 1, 11, 2, 3]) => 6


const sumArray = array => {
    //establish conditional to determine if array is null (array ?)
    //sort array array.sort((a,b) => a - b)
    //exclude greatest and least values .slice(1, -1)
    //sum the remaining values .reduce((acc,el) => acc + el, 0) //the 0 will catch if the length is < 3
    //return the result
    return array ? array.sort((a,b) => a - b).slice(1, -1).reduce((acc,el) => acc + el, 0) : 0
}