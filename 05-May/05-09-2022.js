    //======7kyu======

// All we eat is water and dry matter.

// Let us begin with an example:

// John bought potatoes: their weight is 100 kilograms. Potatoes contain water and dry matter. The water content is 99 percent of the total weight. He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.

// At the output the water content is only 98%.

// What is the total weight in kilograms (water content plus dry matter) coming out of the oven?

// He finds 50 kilograms and he thinks he made a mistake: "So much weight lost for such a small change in water content!"

// Can you help him?

// Task
// Write function potatoes with

// int parameter p0 - initial percent of water-
// int parameter w0 - initial weight -
// int parameter p1 - final percent of water -
// potatoesshould return the final weight coming out of the oven w1 truncated as an int.

// Example:
// potatoes(99, 100, 98) --> 50

const potatoes = (p0, w0, p1) => parseInt(w0 * ((100-p0) / (100-p1)))

//*****I had a bit of difficulty with the math of the solution, but with the help of GoogleFu i was able to find the math equation and just wrote the code for the math of it. 


//=============================================================================================================


    //======7kyu======

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

const addBinary = (a,b) => (a+b).toString(2)

//*****I was able to get thiskata farily easily, but used the MDN to understand that parseInt(2) turns binary into a number, where .toString(2) converts a number to a binary string.


//=============================================================================================================


    //======7kyu======

// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15
// TIPS:
// ruby/python : http://lmgtfy.com/?q=Ruby+splat+operator

// JS/Coffeescript : http://lmgtfy.com/?q=Javascript+arguments+variable

// C: https://www.geeksforgeeks.org/variadic-functions-in-c/

const sum = (...args) => args.reduce((acc,el) => +acc + el)

//*****I played around with how to call the arguments using different notations and was able to use it doing both block and arrow functions. 


//=============================================================================================================


    //======7kyu======

// After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.

// Example
// findSum(1,2,3,4); // returns 10 
// findSum(1,-2);    // returns -1 
// findSum();        // returns 0 
// Hint: research the arguments object on google or read Chapter 4 from Eloquent Javascript

function findSum(){
    return !arguments.length ? 0 :
    [...arguments].every(x => x >= 0) ? [...arguments].reduce((acc,el) => +acc + el) :
    -1
  }

//*****I was able to get this kata with a bit of ease. I also refactored my code to a single line arrow function:

const findSum = (...args) => args.every(x => x >= 0) ? args.reduce((acc,el) => +acc + el, 0) : -1


//=============================================================================================================


    //======7kyu======

// Convert integers to binary as simple as that. You would be given an integer as a argument and you have to return its binary form. To get an idea about how to convert a decimal number into a binary number, visit here.

// Notes: negative numbers should be handled as two's complement; assume all numbers are integers stored using 4 bytes (or 32 bits) in any language.

// Your output should ignore leading 0s.

// So, for example:

// toBinary(3)=="11"
// toBinary(-3)=="11111111111111111111111111111101"
// Be Ready for Large Numbers. Happy Coding ^_^

const toBinary = n => (n>>>0).toString(2)

//*****I found the solution to this kata very easily, but struggled with the negative number. To ensure the proper binary sequence is provided, the shift operator (>>>) is used to convert the negative number into binary appropriately.


//=============================================================================================================


    //======7kyu======

// A parity bit, or check bit, is a bit added to a string of bits to ensure that the total number of 1-bits in the string is even or odd. Parity bits are used as the simplest form of error detecting code.

// You have two parameters, one being the wanted parity (always 'even' or 'odd'), and the other being the binary representation of the number you want to check.

// Your task is to return an integer (0 or 1), whose parity bit you need to add to the binary representation so that the parity of the resulting string is as expected.

// Example:

//     Parity: 'even'
//     Bin: '0101010'
//     Result: 1
// Because there is an odd number of 1-bits (3) you need to put another 1 to it to get an even number of 1-bits.

// For more information: https://en.wikipedia.org/wiki/Parity_bit

function checkParity(parity, bin){
    return !([...bin].filter(x => x == 1).length % 2) && parity == 'even' ? 0 :
             [...bin].filter(x => x == 1).length % 2 && parity == 'odd' ? 0 : 1
}

//*****I was able to get this kata after some deep thought, but also located how to refactor the code below from the solutions:

const checkParity = (parity, bin) => +(parity == (bin.match(/1/g).length % 2 ? 'even': 'odd'))

//*****I am really proud of my progress and being able to understand how this broke down. 