// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples

// input will be a string 
// output will be the string with all vowels replaced with an exclamation point '!'
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

const replace = (string) => {
    //go through string looking for vowels /[aeiou]/gi
    // replace all occurrences with the replacement string
    // return the result
    return string.replace(/[aeiou]/gi, '!')
}