    //======7kyu======

// You have a string that consists of zeroes and ones. Now choose any two adjacent positions in the string: if one of them is 0, and the other one is 1, remove these two digits from the string.

// Return the length of the resulting (smallest) string that you can get after applying this operation multiple times?

// Note: after each operation, the remaining digits are separated by spaces and thus not adjacent anymore - see the examples below.

// Examples
// For "01010" the result should be 1:

// "01010"  -->  "  010"  -->  "    0"
// For "110100" the result should be 2:

// "110100"  -->  "1  100"  -->  "1    0"
// Input/Output
// [input] string s
// The initial string.

// [output] an integer
// The minimum length of the string that may remain after applying the described operations as many times as possible.

const zeroAndOne = (s) => s.replace( /(10|01)/g, '').length

//*****I wasn't able to get this kata challenge. I stumbled with Regex and could not get ti tto do more than just one time. In looking through the solutions I identified the error in my code, but can't fully understand the why. 


//=============================================================================================================


