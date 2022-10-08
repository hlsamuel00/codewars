// DESCRIPTION:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//P: input will be a string
//R: output should be the length of the shortest word
//E: findShort("bitcoin take over the world maybe who knows perhaps") => 3
  // findShort("turns out random test cases are easier than writing out basic ones") => 3
  // findShort("Let's travel abroad shall we") => 2


const findShort = (string) => {
    // convert string into an array of words (string.split(' '))
    // map over the array with the length of the strings (el => el.length)
    // determine the minimum of the array (Math.min(...))
    // return the result
    return Math.min(...Array.from(string.split(' '), word => word.length))
}