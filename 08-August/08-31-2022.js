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

// DESCRIPTION:
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//P: input will be an integer and a string
//R: output will be the string repeated n times (n = the integer given)
//E: repeatStr(6, 'I') => 'IIIIII'
  // repeatStr(5, 'Hello') => 'HelloHelloHelloHelloHello'

const repeatStr = (n, str) => {
    //repeat string with n passed in as an argumetn to the method (str.repeat(n))
    // return the result
    return str.repeat(n)
}

//=============================================================================================================

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

//P: input will be a string
//R: output should be the string with all but the last 4 digits masked with '#'
//E: maskify('4556364607935616') => '############5616'
  // maskify('64607935616') => '#######5616'
  // maskify('1') => '1'
  // maskify('11111') => '#1111'

const maskify = value => {
    // convert values to an array ([...value])
    // map over array and convert values to '#' 
        // create conditional to skip the last 4 digits (.map((let, idx) => idx < value.length-4 ? '#' : let))
    // join array (.join('')) 
    // return the result
    return [...value].map((let,idx) => idx < value.length-4 ? '#' : let).join('')
}

// or

const maskify = value => value.slice(-4).padStart(value.length, '#')
//this solutoin was completed using the 

//=============================================================================================================