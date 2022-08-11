// DESCRIPTION:
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

//Jenny's function: 
function greet(name){
    return "Hello, " + name + "!";
    if(name === "Johnny")
      return "Hello, my love!";
}

//=======================================//

//My refactoring/debugging:
function greet(name){
    if(name === "Johnny"){
      return "Hello, my love!"
    }
    return "Hello, " + name + "!";
}

//=======================================//

//My code:
const greet = name => `Hello, ${name === 'Johnny' ? 'my love': name}!`


//=============================================================================================================

// DESCRIPTION:
// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

// For example:

// derive(7, 8)
// In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.

// derive(7, 8) --> this should output "56x^7" 
// derive(5, 9) --> this should output "45x^8" 
// Notes:

// The output of this function should be a string
// The exponent will never be 1, and neither number will ever be 0

//P: input will be two number type parameters
//R: return should be a string where the arguments are multiplied and 1 is taken from the exponent and returned as a mathmatical expression ('28x^7')
//E: derive(7, 8) => '56x^7'
  // derive(5, 9) => '45x^8'
//Question: If exponent is less than 3, should it return the same number?

const derive = (coefficient, exponent) => {
    //multiply the arguments (coefficient * exponent)
    //set up conditional to determine if exponent is greater than 2
        //if true subtract one from exponent exponent > 2 ? --exponent : exponent
    //return the string
    return `${coefficient * exponent}x^${exponent > 1 ? --exponent : exponent}`
}