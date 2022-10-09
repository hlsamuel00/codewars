// DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//P: input will be a string
//R: output will be a string with repeating characters based on it's index
//E: accum("abcd") => "A-Bb-Ccc-Dddd"
  // accum("RqaEzty") => "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
  // accum("cwAt") => "C-Ww-Aaa-Tttt"

const accum = (string) => {
    // split string into an array (Array.from(string))
    // map over the array to include repeating characters ((letter, i) => letter.toUpperCase() + letter.toLowerCase().repeat(i))
    // convert array to string (.join('-'))
    // return the result
    return Array.from(string, (letter,i) => letter.toUpperCase() + letter.toLowerCase().repeat(i)).join('-')
}