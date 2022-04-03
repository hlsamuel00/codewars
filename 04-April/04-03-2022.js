// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let arr = []
    for (let i = n; i > 0; i--){
      arr.push(i)
    }
    return arr;
  };

//*****I'm getting through a lot of these katas pretty easily at times, but i look to see how i can refactor the code to make it much more efficient. From looking at the solutions, I came up with this as a solution:

//const reverseSequence = n => Array(n).fill(0).map((e,i) => n - i)
//*****This creates an array using the Array constructor and sets it's length to the number provided in the function, fills all values with 0, then maps the new values counting down from the number provided to being greater than 0. 


//=============================================================================================================


// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(x => !geese.includes(x))
  };

//*****I was able to fully understand why this works!! This was a valuable learning lesson!!


//=============================================================================================================