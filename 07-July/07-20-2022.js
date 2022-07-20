// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


const isPangram = (string) => [...'abcdefghijklmnopqrstuvwxyz'].every(x => [...string.toLowerCase()].includes(x))

//*****I was able to get this kata challenge on the first few tries, but I then went back to refactor the code i developed the code below:

const isPangram2 = (string) => [...new Set(string.toLowerCase().match(/[a-z]/g))].length == 26