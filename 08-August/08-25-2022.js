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