// DESCRIPTION:
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// input will be a string
// output will be a string of numbers corresponding to the position of the alphabet
// example: alphabetPosition("The sunset sets at twelve o' clock.") => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

const alphabetPosition = (string) => {
    // create capture string (/[a-z]/gi)
    // locate all letters (string.match(/[a-z]/gi))
    // map over the array with the alphabet position(.map(el => el.toLowerCase().charCodeAt(0) - 96))
    // convert array to string (.join(' '))
    // return the result
    return (string.match(/[a-z]/gi) || []).map(el => el.toLowerCase().charCodeAt(0) - 96).join(' ')
}
