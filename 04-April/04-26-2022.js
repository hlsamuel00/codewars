//Now you have to write a function that takes an argument and returns the square of it.

const square = num => num**2

//*****I was able to get this kata very easily. 


//=============================================================================================================

    //======7kyu======

// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.


const unusedDigits = (...args) => Array(...'0123456789').filter(x => !Array.from(args).join('').split('').includes(x)).join('')

//*****I have heavy frustration around this kata. I had figured this code out, but due to not having the spread operator in the arguments, my code did not produce the adequate result. A look at the solutions let me know that i had gotten it, just needed a bit of help to get it to work. i am extremely proud of the level of comprehension I had. The code above is my refactored code, below is the original code I wrote:
    const unuseddigits = (...args) => {
        let nums = Array(...'0123456789')
        let arg = Array.from(args).join('').split('')
        return nums.filter(x => !arg.includes(x)).join('')
    }


//=============================================================================================================

    //======7kyu======

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

const vowelIndices = word => {
    return Array(...word).map((x,i) => Array(...'aeiouy').includes(x.toLowerCase()) ? i+1 : x).filter(x => parseInt(x))
  }


//*****I reviewed the solutions and located a way to fix my idea of using the reduce method. The code below is my refactoring using reduce() instead of a map() and filter():
  const vowelindices = (word) => Array(...word).reduce((nArr,el,i) => Array(...'aeiouy').includes(el.toLowerCase()) ? [...nArr, i+1] : nArr, [])
//*****This kata was really fun to complete!!


//=============================================================================================================


    //======7kyu======

//     Given the triangle of consecutive odd numbers:

//                 1
//             3     5
//         7     9    11
//     13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

const rowSumOddNumbers = n => n**3

//*****I can tell that my expertise has increased. I was able to recognize a pattern and execute code based on that pattern. I wasn't able to get this kata the first time around, but when cleaning up my unfinished kata, i was able to get it cleared. 


//=============================================================================================================