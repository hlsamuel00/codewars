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

