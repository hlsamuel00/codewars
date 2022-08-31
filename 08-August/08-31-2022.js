// DESCRIPTION:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

//P: input will be a number
//R: output should be the number converted to a string
//E: numberToString(123) => '123'
  // numberToString(999) => '999'
  // numberToString(-100) => '-100'

const numberToString = num => {
    // convert number to string (num.toString())
    // return the result
    return num.toString()
}

//=============================================================================================================

// DESCRIPTION:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//P: input will be a string
//R: output should be the string reversed
//E: solution('world') => 'dlrow'
  // solution('word') => 'drow'

const solution = string => {
    // convert the string to an array ([...string] or string.split(''))
    // reverse the array (.reverse())
    // convert the array to a string (.join(''))
    // return the result
    return [...string].reverse().join('')
}

//=============================================================================================================

