// DESCRIPTION:
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//P: input will be two arrays
//R: output should be the initial array with any digits included in the second array removed and in order
//E: arrayDiff([1,2,2,2,3],[2]) => [1,3]
  // arrayDiff([1,2],[1]) => [2]

const arrayDiff = (a,b) => {
    // filter through array to remove any occurrence of a value included in the second array
        // a.filter(el => !b.includes(el))
    // return the result
    return a.filter(el => !b.includes(el))
}