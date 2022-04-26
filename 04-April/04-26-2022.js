//Now you have to write a function that takes an argument and returns the square of it.

const square = num => num**2

//*****I was able to get this kata very easily. 


//=============================================================================================================


// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.


const unusedDigits = (...args) => Array(...'0123456789').filter(x => !Array.from(args).join('').split('').includes(x)).join('')

//*****I have heavy frustration around this kata. I had figured this code out, but due to not having the spread operator in the arguments, my code did not produce the adequate result. A look at the solutions let me know that i had gotten it, just needed a bit of help to get it to work. i am extremely proud of the level of comprehension I had. The code above is my refactored code, below is the original code I wrote:
    const unusedDigits = (...args) => {
        let nums = Array(...'0123456789')
        let arg = Array.from(args).join('').split('')
        return nums.filter(x => !arg.includes(x)).join('')
    }

    
