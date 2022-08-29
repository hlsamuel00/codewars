// DESCRIPTION:
// Description
// Welcome, Warrior! In this kata, you will get a message and you will need to get the frequency of each and every character!

// Explanation
// Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.

// Example
// charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}

//P: input will be a string
//R: output should be an object that counts the occurence of the character/letter in the string in alphabetical order
//E: charFreq("I like cats") => {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}
  // charFreq('hello world') => {'d': 1, 'e': 1, 'h': 1, 'l': 3, 'o': 2, 'r': 1, 'w': 1}

const charFreq = string => {
    // separate the string into an array ([...string])
    // sort the array (.sort())
    // convert the array into an object (.reduce((acc,let) => , {}))
    // return the result
    return [...string].sort().reduce((acc,let) => {
        acc[let] = ++acc[let] || 1
        return acc
    }, {})
}

//=============================================================================================================

// DESCRIPTION:
// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.

//P: input will be strings or numbers
//R: return should be a single string a merger of both strings
//E: joinStrings('string1', 'string2') => 'string1 string2'
  // joinStrings('testing', 'testing') => 'testing testing'

const joinStrings = (string1, string2) => {
    // because + , .concat() & .join() cannot be used in this kata, create a template literal with the arguments (`${} ${}`)
    // return the result
    return `${string1} ${string2}`
}

//=============================================================================================================

// DESCRIPTION:
// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

//P: input will be a number and a string
//R: output should be a boolean value representing whether the two arguments are the same character
//E: add(1, '1') => true
  // add(1, '0') => false
  // add('11', 11) => true

const add = (val1, val2) => {
    // create comparison between the two values (val1 == val2)
        // == does a value comparison vs. === does a value and type comparison
    // comparisons return a boolean value
    // return the result
    return val1 == val2
}

//=============================================================================================================

// DESCRIPTION:

// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
// Happy hacking!


//P: input will be two strings
//R: output should be a new string with the names replaced with the objects provided or 'Your name must start with a letter from A - Z.' if the name doesnt start with a letter
//E: aliasGen('Larry', 'Brentwood') => 'Logic Bomb'
  // aliasGen('123abc', 'Petrovic') => 'Your name must start with a letter from A - Z.'

const aliasGen = (fName, lName) => {
    // get the first letter of each of the arguments (fName[0] lName[0])
    // establish conditional to determine if the name starts with a letter (!+fName[0] && !+lName)
        // create condtional outcomes (? `${firstName[fName[0].toUpperCase()]} ${surname[lName[0].toUpperCase()]}` : 'Your name must start with a letter from A - Z.')
    // return the result
    return !+fName[0] && !+lName ? `${firstName[fName[0].toUpperCase()]} ${surname[lName[0].toUpperCase()]}` : 'Your name must start with a letter from A - Z.'
}