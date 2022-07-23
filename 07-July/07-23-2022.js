// The span function is a good one to know. It accepts a sequence and a predicate function and returns two sequences. The first sequence contains all the elements of the argument sequence up to the item that caused the first failure of the predicate. The second returned sequence contains the rest of the original sequence. The original sequence is not modified.

// For example,


// function isEven (x) {
//   return Math.abs(x) % 2 === 0;
// }

// var arr = [2,4,6,1,8,10];

// // This is true
// span(arr, isEven) === [[2,4,6],[1,8,10]]
// Your task is to...wait for it... write your own span function !!!

// Hint/Challenge: If you have completed the takeWhile function and the dropWhile function, then you can solve this problem in one line!

function span(arr, predicate, ind = arr.indexOf(arr.find(x => !predicate(x)))) {
    return [arr.slice(0,(ind >= 0 ? ind : arr.length)), arr.slice(ind >= 0 ? ind : arr.length)]
}

//*****I wasn't able to get this kata, but i reviewed the solutions and came up with the function above that works. the solution used for my coding is below:

function span(arr, predicate) {
    for(var i = 0; i<arr.length && predicate(arr[i]); i++)
    return [arr.slice(0,i), arr.slice(i)]
}
  