// DESCRIPTION:
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

//P: input will be a string
//R: output should be all the digits in the string
//E: getNumberFromString("hell5o wor6ld") => 56
  // getNumberFromString('h23ellowor8403d') => 238403
 
  
const getNumberFromString = string => {
    // pull digits from the string into an array (string.match(/\d/g))
    // combine the array (.join(''))
    // convert the string into a number
    // return the result
    return +string.match(/\d/g).join('')
}