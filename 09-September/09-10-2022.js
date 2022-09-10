// DESCRIPTION:
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

//P: input will be an array
//R: output should be an array who's element is a multiple of its index
//E: multipleOfIndex([22, -6, 32, 82, 9, 25]) => [-6, 32, 25]
  // multipleOfIndex([68, -1, 1, -7, 10, 10]) => [-1, 10]
  // multipleOfIndex([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]) => [-85, 72, 0, 68]

const multipleOfIndex = (arr) => {
    // filter array with conditional (arr.filter((el,i) => !(el % i)))
        // add additional condition to prevent dividing by 0 ( && i)
    // return the result (filter() returns a shallow copy of the array input)
    return arr.filter((el,i) => !(el % i) && i)
}