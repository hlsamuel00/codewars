// #To square(root) or not to square(root)

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// The input array will always contain only positive numbers and will never be empty or null.

// The input array should not be modified!

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

const squareOrSquareRoot = array => array.map(x => Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x**2)

//*****I was able to get this kata very easily. i stumbled a little with the syntax for the isInteger() method, but a quick search got me on the right track. 


//=============================================================================================================


// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

const sameCase = (a, b) => !a.match(/^[a-zA-Z]*$/) || !b.match(/^[a-zA-Z]*$/) ? -1 :
        a == a.toLowerCase() && b == b.toLowerCase() || a == a.toUpperCase() && b == b.toUpperCase() ? 1 : 0


//*****I was able to get this, but also reviewed some regex documentation to understand the cases where the the inputs are not letters. 