// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

const expressionMatter = (a, b, c) => {
    return Math.max(
        a + b + c,
        a * b * c,
        (a + b) * c,
        (a * b) + c,
        a + (b * c),
        a * (b + c),
)}

//*****I was able to get this kata on the first try (almost) i made a mistake with my commas within the Math.max() method. Other than that, I was right on it!!


//=============================================================================================================


// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

const litres = time => Math.floor( time * .5)

//*****I was able to blow through this kata in about 2 mins.


//=============================================================================================================


// Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for ruby).

// The input for each function is the output of the previous function (except the first function, which takes the starting value as it's input). Return the final value after execution is complete.

// function add(num) {
//   return num + 1
// }

// function mult(num) {
//   return num * 30
// }

// chain(2, [add, mult]);
// returns 90;


const chain = (input, fs) => {
    const add = number => number + 10
    const mult = number => number * 30
    return mult(add(input))
  }


//*****I wasn't able to get this kata fully, but located a solution that made the most sense for me:
    //const chain = (input, fs) => fs.reduce((acc,x) => x(acc), input);
//*****I fully understand how to iterate through the function using the reduce method and how it takes my value and enters it into the next function seamlessly
