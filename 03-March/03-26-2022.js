// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1   Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// 2   Swift, Ruby and Crystal: nil
//     Haskell: Nothing
//     Python, Rust, Scala: None
//     Julia: nothing
//     Nim: none(int) (See options)

function firstNonConsecutive (arr) {
    for (let i = 0; i < arr.length; i++)
      if (i !== 0 && arr[i-1] !== arr[i] + 1)
        return arr[i]
    return null
  }
//*****I wasn't able to get this Kata and had to unlock the answers. One of the solutions matched closely to the solution i was attempting to deduce, but i was utilizing the forEach() method for the array. I had a conditional to ensure that the check was omitting arr[0]. Below is the code that I wrote in my attempt:

// function firstNonConsecutive (arr) {
//     arr.forEach((element,index) => {
//       if (index !== 0 && element !== (arr[index-1] + 1)){
//         return arr[index]
//       } else {
//         return null
//       }
//     })
//   }

//*****My solution continued to return undefined and I'm unclear as to what was broken. The for loop would do the same as the .forEach() method for the array. 

//*****I re-reviewed this problem and located details that outlined that the for loop works better for this problem de to the ability to break out of the loop once the conditional has been met. Once you find the outlined parameters, it will stop, whereas the for.Each() method will continue to run after the conditions have been met.


//=============================================================================================================


// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//     ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

//   For example, if this array were passed as an argument:

//     ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

//  Your function would return the following array:

//     ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    birds = birds.filter(element => {
        geese.forEach(x => element != x)
    } )
    return birds
    // return an array containing all of the strings in the input array except those that match strings in geese
  };

  //*****I wasn't able to get this Kata either. This one was a bit tricky, but when i reviewed the solutions, they made sense. The solution below made the most sense and i will commit to understanding this in the future:

//   function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(b => !geese.includes(b));
//   };


//=============================================================================================================


// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++){
      newStr += str[i] + str[i]
    }
    return newStr
  }

//*****I made a slight mistake with the for loop and misspelled the length property which caused my function not to work properly. When I noticed this simple mistake I reviewed the Kata from above and noticed that my math was off so I will resubmit it to determine if I was able to work through it. 


//=============================================================================================================


// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

const greet = name => `Hello, ${name} how are you doing today?`;

//*****I was able to complete this very easily! 