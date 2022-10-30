// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

const reverseWords = (sentence) => sentence.split(' ').map(word => [...word].reverse().join('')).join(' ')

// OR

const reverseWords = (sentence) => sentence.replace(/\S+/g, matchedWord => [...matchedWord].reverse().join(''))