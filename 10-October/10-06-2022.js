// DESCRIPTION:
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


//P: input will be an integer
//R: output should be a sum of all of the digits of the binary representation of the number
//E: countBits(0) => 0
  // countBits(4) => 1
  // countBits(1234) => 5

const countBits = (number) => {
    // convert number to binary number.toString(2)
    // convert string to an array [...number.toString(2)]
    // reduce array to a single digit (.reduce((acc,el) => acc + +el, 0))
    // return the result
    return [...number.toString(2)].reduce((acc,el) => acc + +el, 0)
}