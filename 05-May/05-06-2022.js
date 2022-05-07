// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

const squareDigits = (num) => parseInt(num.toString().split('').map(x => x ** 2).join(''))

//*****I was able to get this kata challenge very well, but am looking forward to the solutions and seeing how they were able to manage. Looking over the solutions they all appear very similar to my solution. I added some syntactical sugar by using + versus parseInt(). 