// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
//     Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


const betterThanAverage = (classPoints, yourPoints)=> yourPoints > ((classPoints.reduce((acc,c) => acc+=c,0)) + yourPoints) / (classPoints.length+1)

//*****The most difficult part of this challenge was ensuring that order of operations was executing correctly. THis would have been resolved on the first try, but due to parentheses it threw the first test off


//=============================================================================================================

//*********7kyu problem*********//

// #'x' marks the spot

// ##Task:

// Given a two dimensional array, return the co-ordinates of 'x'.

// If 'x' is not inside the array, or if 'x' appears multiple times, return []

// The co-ordinates should be zero indexed.

// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

// Example test cases:

// 'Return an empty array if input is an empty array' => []

// [] 

// 'Return an empty array if no x found' => []

// [
//   ['o', 'o'],
//   ['o', 'o']
// ]

// 'Return an empty array if more than one x found' => []

// [
//   ['x', 'o'],
//   ['o', 'x']
// ]

// 'Return [0,0] when x at top left' => [0, 0]

// [
//   ['x', 'o'],
//   ['o', 'o']
// ]

// 'Return [4,6] for the example below' => [4, 6]

// [
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
//   ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
// ]


const xMarksTheSpot = input =>{
    let coords = input.map((x,i) => x.map((y,j) => [i,j])).reduce((a,b) => a.concat(b), []).filter(([i, j]) => input[i][j] == 'x')
    return coords.length === 1 ? coords[0] : []
}


//******I wasn't able to get the kata on my own, but I located the solutions and found one that i could recreate:
    // const xMarksTheSpot = (input) => {
        // let coords = []
    // 
        // for (let i = 0; i < input.length; i++) {
        //   if (input[i].includes("x")) {
            // coords.push([i, input[i].indexOf("x")])
        //   }
        // }
        // if (coords.length === 1) {
        //   return coords[0]
        // } else {
        //   return []
        // }
    //   }


//=============================================================================================================


// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
// Please use the following function names:
// addition = add
// multiply = multiply
// division = divide (both integer and float divisions are accepted)
// modulus = mod
// exponential = exponent
// subtraction = subt
    // Note: All math operations will be: a (operation) b

const add = (a,b) => a + b;
const divide = (a,b) => a / b;
const multiply = (a,b) => a * b;
const mod = (a,b) => a % b;
const exponent = (a,b) => a**b ;
const subt = (a,b) => a - b;

//*****I was able to get these relatively easily. I completed these on the first try,but went back and wrote them as arrow functions before submitting. 


//=============================================================================================================

