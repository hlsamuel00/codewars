// DESCRIPTION:
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//P: input will be an array of strings
//R: output should be the array sorted according to the length from smallest to largest
//E: sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]) => ["Eyes", "Glasses", "Monocles", "Telescopes"]

const sortByLength = (array) => {
    // create a new array ([...array])
    // sort new array by length of elements (.sort((a,b) => a.length - b.length))
    // return the result
    return [...array].sort((a,b) => a.length - b.length)
}