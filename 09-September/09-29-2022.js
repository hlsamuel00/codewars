// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
  // getRoot(16) =>  1 + 6 = 7
  // getRoot(942) => 9 + 4 + 2 = 15  ->  1 + 5 = 6
  // getRoot(132189) =>  1 + 3 + 2 + 1 + 8 + 9 = 24  ->  2 + 4 = 6
  // getRoot(493193) =>  4 + 9 + 3 + 1 + 9 + 3 = 29  ->  2 + 9 = 11  ->  1 + 1 = 2


//P: input will be an integer
//R: output should be an integer of the sum of the digits until it is a single digit
//E: digitalRoot(16) =>  1 + 6 = 7
  // digitalRoot(942) => 9 + 4 + 2 = 15  ->  1 + 5 = 6
  // digitalRoot(132189) =>  1 + 3 + 2 + 1 + 8 + 9 = 24  ->  2 + 4 = 6
  // digitalRoot(493193) =>  4 + 9 + 3 + 1 + 9 + 3 = 29  ->  2 + 9 = 11  ->  1 + 1 = 2

const digitalRoot = (num) => {
    // establish a loop that will run until num is a single digit (while(num.toString().length > 1))
    // convert number into an array of integers (Array.from(n.toString(), el => +el))
    // reduce string to a single number (.reduce((acc,el) => acc + +el, 0))
    // once reduced to a single digit, return the result
    while(num > 9){
        num = [...num.toString()].reduce((acc,el) => acc + +el, 0)
    }
    return num
}