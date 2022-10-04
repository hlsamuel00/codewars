// DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.


//P: input will be an integer
//R: output should be the integer with its digits in descending order
//E: descendingOrder(12115) => 52111
  // descendingOrder(42145) => 54421
  // descendingOrder(145263) => 654321
  // descendingOrder(123456789) => 987654321

const descendingOrder = (num) => {
    // convert number to an array ([...num.toString()])
    // sort the array (.sort((a,b) => b - a))
    // convert the array to a string (.join(''))
    // convert the string to a number (Number() or +)
    // return the result
    return +[...num.toString()].sort((a,b) => b - a).join('')
}
