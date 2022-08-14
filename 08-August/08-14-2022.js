// DESCRIPTION:
// Complete the solution so that it reverses all of the words within the string passed in.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//P: input will be a string of words
//R: return should be the reverse of the string (words backwards not each individual letter)
//E: reverseWords("The greatest victory is that which requires no battle") => "battle no requires which that is victory greatest The"
//Questions: 

const reverseWords = string => {
    //place words in an array string.split(/\s/)
    //reverse order of words .reverse()
    //combine the array .join(' ')
    //return the result
    return string.split(/\s/).reverse().join(' ')
}