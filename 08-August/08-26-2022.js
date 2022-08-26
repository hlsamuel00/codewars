// DESCRIPTION:
// *** No Loops Allowed ***

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

// https://www.codewars.com/kata/no-loops-1-small-enough

// https://www.codewars.com/kata/no-loops-3-copy-within

//P: input will be an array and either a Number or String
//R: output should be a boolean whether the additional value is included in the array
//E: check([66, 101], 66) => true
  // check(['hello', 'world'], 'hi') => false
  // check(['hello', 'world'], 'hello') => true
  // check([66, 101, 205, 33], 3) => false

const check = (arr, val) => {
    // search the array to determine if the value is included (arr.includes(val))
    // return the result (the .includes() method returns a boolean value)
    return arr.includes(val)
}


//=============================================================================================================