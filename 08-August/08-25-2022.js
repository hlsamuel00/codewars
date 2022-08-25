// DESCRIPTION:
// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

//P: input will be an array of strings(full name), and two strings (city and state)
//R: output should be a welcome message that welcomes the person (first name and last name) to the city and state passed in as arguments.
//E: sayHello(['John', 'Smith'], 'Phoenix', 'Arizona') => 'Hello, John Smith! Welcome to Phoenix, Arizona!'
  // sayHello(['Harvey', 'Samuel'], 'Columbia', 'South Carolina') => 'Hello, Harvey Samuel! Welcome to Columbia, South Carolina!'

const sayHello = (name, city, state) =>{
    // merge name together (name.join(' '))
    // create template string (`Hello, {}! Welcome to {}, {}`)
    // return the result
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

//=============================================================================================================

// DESCRIPTION:
// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

//P: input will be a string of words. input may have trailing spaces
//R: output should be a reverse of the words in the string
//E: reverse('Hello World') => 'World Hello'
  // reverse('Hi There.') => 'There. Hi'
  // reverse('   Hello World    ') => 'World Hello'

const reverse = string => {
    // trim the extra space on the string argument (string.trim())
    // convert string into an array (string.split(' '))
    // reverse array (.reverse())
    // convert array to string (.join(' '))
    // return the result
    return string.trim().split(' ').reverse().join(' ')
}

//=============================================================================================================

// DESCRIPTION:
// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

//P: input will be 2 strings (text before, character)
//R: return should be the output of the string after the character has replaced the text before string
//E: contamination('abc', 'z') => 'zzz'
  // contamination('', 'z') => ''
  // contamination('abc', '') => ''

const contamination = (text, char) => {
    // convert text to an array ([...text] or text.split(''))
    // map over the array with the new input (.map(el => char))
        //by using the Array.from() method we can convert the string into an array and map over it in one line of code
    // join the array back together (.join(''))
    // return the result
    return Array.from(text, (x) => char).join('')
}

// or

const contamination2 = (text, char) => text.replace(/./g, char)
    // the replace method takes in regex the (/./g) replaces all characters with the (char) 

//=============================================================================================================

// DESCRIPTION:
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

// Code provided:
function buildString(...template){
    return `I like #{template.join(',')}!`;
}

// Updated code:
function buildString(...template){
    return `I like ${template.join(', ')}!`;
}

// My code:
const buildString = (...$) => `I like ${$.map((el,i) => i == $.length-1 ? `and ${el}`: el).join(', ')}!`
    // my code doesn't satisfy the params of the test, but is grammatically correct :D

//=============================================================================================================

// Template Strings
// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings

// Task
// Your task is to return the correct string using the Template String Feature.

// Input
// Two Strings, no validation is needed.

// Output
// You must output a string containing the two strings with the word ```' are '```
// Reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/template_strings

//P: input will be two strings (object, feature)
//R: output should be a single string with the word 'are' between the two strings
//E: TempleStrings('Animals', 'Good') => 'Animals are Good'
  // TempleStrings('Bears', 'Awesome') => 'Bears are Awesome'

const TempleStrings = (object, feature) => {
    // create a template string with the object and feature (`{} are {}`)
    // return the result
    return `${object} are ${feature}`
}
