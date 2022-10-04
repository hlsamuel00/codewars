// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//P: input will be a string
//R: output should be a string of '(' if the letter occurs once and ')' if the letter occurs more than once
//E: duplicateEncode("din") => "((("
  // duplicateEncode("recede") => "()()()"
  // duplicateEncode("recede" ) => "()()()"
  // duplicateEncode("Success") => ")())())"
  // duplicateEncode("(( @") => "))(("

const duplicateEncode = (word) => {
    // separate word into an array [...word]
    // map through array and change each element
        // establish conditional to determine if letter occurs more than once (word.match(el).length > 1 ?)
        //.map((el,i,arr) => arr.filter(e => e === el).length > 1 ? ')' : '(')
    // join the array to make a string (.join(''))
    // return the result
    return [...word.toLowerCase()].map((el,i,arr) => arr.filter(e => e === el).length > 1 ? ')' : '(').join('')
}
