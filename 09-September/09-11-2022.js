// DESCRIPTION:
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

//P: input will be a string
//R: output will be an array of each word in the string with the length of the string followed
//E: addLength("apple ban") => ["apple 5", "ban 3"]
  // addLength("you will win") => ["you 3", "will 4", "win 3"]

const addLength = (string) => {
    // split the string into an array (string.split(' '))
    // map over the array to add the length (.map(el => `${el} ${el.length}`))
    // return the result
    return string.split(' ').map(el => `${el} ${el.length}`)
}

//=============================================================================================================

