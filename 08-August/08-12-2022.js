// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//P: input will be a non-empty array of integers
//R: the return should be a single integer of the product of all entries of the array.
//E: [1, 2, 3, 4] => 24
  // [10, 200, 2] => 4000
  // [1, 2, 4, 1] => 8

const grow = x => {
    //use reduce to multiply all of the entries of an array and return a single integer
    return x.reduce((acc,el) => acc * el)
}