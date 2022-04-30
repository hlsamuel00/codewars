// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

const summation = num => Array(num).fill(num).reduce((acc,el,i,) => acc += (i+1), 0)

//I was able to get this kata very easily. The only thing I struggled with was the undefined array. Looking through the solutions, i was abl eto determine that there was a pattern in the code:
    //const summation = n => n * (n + 1) / 2;
