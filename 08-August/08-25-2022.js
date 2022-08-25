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