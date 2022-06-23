// DESCRIPTION:
// When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes. While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.

// Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale. Your final rating should be rounded to "0.5" (nearest half moon). Input is always valid.

// Write a function which returns valid rating represented as moons ('o','c','x') in single string.
// You are given the following values preloaded (remember, since I can't use unicode characters, moons in brackets are here just to improve your imagination):

// const fullMoon = 'o'
// const halfMoon = 'c'
// const newMoon = 'x'

//Input: 1
 //--->> Output: 'cxxxx'

//Input: 7.5
 //--->> Output: 'ooocx'

//Input: 5.9
 //--->> Output: 'oooxx'


function moonRating(rating) {
    let moon = 'o'.repeat(parseInt(Math.round(rating) / 2)) + 'c'.repeat(Math.round(rating)%2)
    return moon.padEnd(5,'x')
}

//******I was able to get this kata challenge, but i also refactored the code to an arrow function below:
const moonRating = (rating, m = Math.round(rating)) => `${'o'.repeat(m / 2)}${'c'.repeat(m % 2)}`.padEnd(5,'x')


//=============================================================================================================

// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1


function leastLarger(a,i) {
    let sorted = a.map(x => x).sort((el,el2) => el - el2)
    return a.indexOf(sorted.find(x => x > a[i]))
}

//*****I was able to get the code above, but i refactored to the code below. 

const leastLarger = (a,i) => a.indexOf([...a].sort((el,el2) => el - el2).find(x => x > a[i]))


//=============================================================================================================