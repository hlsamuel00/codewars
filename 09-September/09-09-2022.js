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