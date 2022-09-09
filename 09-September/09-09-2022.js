// DESCRIPTION:
// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// The websites array has already been defined for you using the following code:

var websites = [];

websites.push('codewars')
// OR
websites.splice(0,0,'codewars')
// OR
websites.unshift('codewars')

//=============================================================================================================

// DESCRIPTION:
// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

//P: input will be an array
//R: output should be the array converted to a string separated by commas
//E: printArray([2, 4, 5, 2]) => '2,4,5,2'
  // printArray(['h', 'e', 'l', 'l', 'o']) => 'h,e,l,l,o'

const printArray = (arr) => {
    // join array with the comma delimiter (arr.join(','))
    // return the result
    return arr.join()
}

//=============================================================================================================

// DESCRIPTION:
// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
// Get your timer out. Are you ready? Ready, get set, GO!!!

//P: input will be two arrays with length > 1
//R: output should be a boolean regarding whether the sum of the squares of the first array is greater than the sum of the cubes of the second array
//E: arrayMadness([4, 5, 6], [1, 2, 3]) => true
//Question: Will both arrays be equal in length?

const arrayMadness = (arr1, arr2) => {
    // square and sum the first array (arr1.reduce((acc,el) => (acc + el**2), 0))
    // cube and sum the second array (arr2.reduce((acc,el) => (acc + el**3), 0))
    // create comparison of the sums
    // return the result
    return arr1.reduce((acc,el) => acc + el**2, 0) > arr2.reduce((acc,el) => acc + el**3 , 0)
}

//=============================================================================================================

// DESCRIPTION:
// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4

//P: input will be an array
//R: output should be the average (mean) of the array
//E: findAverage([1]) => 1
  // findAverage([1, 3, 5, 7]) => 4

const findAverage = (arr) => {
    // reduce average to it's sums (arr.reduce((acc,el) => (acc += el) && acc, 0))
    // divide sum by the length of the array (/arr.length)
    // return the result
    return arr.reduce((acc, el) => (acc += el) & acc, 0)/arr.length
}

//=============================================================================================================

// DESCRIPTION:
// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

//P: input will be an array of numbers
//R: output should be a new array of the [youngest age, oldest age, and the distance between both]
//E: differenceInAges([82, 15, 6, 38, 35]) => [6, 82, 76]
  // differenceInAges([57, 99, 14, 32]) => [14, 99, 85]



const differenceInAges = (ages) => {
    //obtain the maximum of the array
    const max = (arr) => Math.max(...arr)
    //obtain the minimum of the array
    const min = (arr) => Math.min(...arr)
    //obtain the difference of the two
    const difference = (arr) => max(arr) - min(arr)
    // create tuple of the values
    // return the result
    return [min(arr), max(arr), difference(arr)]
}