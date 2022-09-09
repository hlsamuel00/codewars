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

