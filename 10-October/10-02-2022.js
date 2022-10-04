// DESCRIPTION:
// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.


//P: input will be an integer
//R: output should be a boolean whether the integer is a perfect square
// E: isSquare(-1) => false
  // isSquare(0) => true
  // isSquare(3) => false
  // isSquare(4) => true
  // isSquare(25) => true
  // isSquare(26) => false

const isSquare = (num) => {
    // get square root of number (Math.sqrt(num) or num ** (1/2))
    // establish conditional to determine if the value is an integer (Number.isInteger())
    // return the result
    return Number.isInteger(num ** (1/2))
}   