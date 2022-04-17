//     *****7KYU*****

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

const solution = nums => nums == null ? [] : nums.sort((el, el2) => el - el2)

//*****I was able to complete this kata with relative ease. I placed the conditional to review the empty array or null value to produce an empty array


//=============================================================================================================


//     *****7KYU*****

// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

function solve(arr){  
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return arr.map(x => {
     return x.split('').map((y,j) => j+1 == (alphabet.indexOf(y.toLowerCase())+1) ? 1 : 0).reduce((acc,el) => acc+=el,0)
     })
};

//*****I solved this one with a bit of time!! I was able to refactor my code from looking at some of the solutions and came up with this code:
        function solve(arr){  
            let alphabet = 'abcdefghijklmnopqrstuvwxyz'
            return arr.map(x => x.split('').filter((y,j) => j == (alphabet.indexOf(y.toLowerCase()))).length
        )};