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