// DESCRIPTION:
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//P: input will be a string
//R: output will be an array of integers that correspond with the index of each capital letter
//E: capitals('CodEWaRs') => [0,3,4,6]

const captials = (word) => {
    // split word into an array ([...word])
    // filter the array to only include capital letters (.filter(el => el == el.toUpperCase()))
    // map over the array to change the letter to it's corresponding index (.map(el => word.indexOf(el)))
    // return the result
    return [...word].filter(el => el == el.toUpperCase()).map(el => word.indexOf(el))
}

// Refactored code //

const capitals = (word) => [...word].reduce((acc,el) => /[A-Z]/.test(el) ? [...acc, word.indexOf(el)] : acc, [])
    // split word into an array ([...word])
    // filter the array to only include capital letters (.filter(el => el == el.toUpperCase()) or .filter(el => /[A-Z]/.test(el)))
    // map over the array to change the letter to it's corresponding index (.map(el => word.indexOf(el)))
        // utilize the reduce method to streamline the map and filter:
            //.reduce((acc,el) => (el == el.toUpperCase() ? acc.push(word.indexOf(el))) && acc, [])
            //.reduce((acc,el) => /[A-Z]/.test(el) ? [...acc, word.indexOf(el)] : acc, [])
    // return the result
