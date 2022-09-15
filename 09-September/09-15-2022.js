// DESCRIPTION:
// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

//P: input will always be an array of numbers with at least one element.
//R: output should be an array of the highest and lowest numbers (even if the array only has one element)
//E: minMax([1,2,3,4,5]) => [1,5]
  // minMax([2334454,5]) => [5,2334454]
  // minMax([1]) => [1,1]

const minMax = (array) => {
    // calculate the minimum (const min = Math.min(...array))
    // calculate the maximum (const max = Math.max(...array))
    // make an array of the two values ([min, max])
    // return the result
    const min = Math.min(...array)
    const max = Math.max(...array)
    return [min, max]
}