// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

//P: input will be a string
//R: output should be the string reversed if the word is more than 4 letters
//E: spinWords( "Hey fellow warriors" ) => "Hey wollef sroirraw" 
  // spinWords( "This is a test") => "This is a test" 
  // spinWords( "This is another test" )=> "This is rehtona test"

const spinWords = (string) => {
    // separate string by spaces (string.split(' '))
    // map through array to change each element based upon conditional
        // create conditional to determine if word should be reversed (el.length > 4 ? [...el].reverse().join(''))
        //.map(el => el.length > 4 ? [...el].reverse().join('') : el )
    // convert array to string (.join(' '))
    // return the result
    return string.split(' ').map(el => el.length > 4 ? [...el].reverse().join('') : el ).join(' ')
}

// OR

const spinWords = (words) => words.replace(/\w{5,}/g, (word) => [...word].reverse().join(''))