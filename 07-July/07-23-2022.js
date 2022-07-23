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



//=============================================================================================================


// Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to get the longest prefix of elements such that the predicate is true for each element. We'll call this the takeWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

// Example:
// sequence : [2,4,6,8,1,2,5,4,3,2]
// predicate: is an even number
// result   : [2,4,6,8]
// Your task is to implement the takeWhile function.

// If you've got a span function lying around, this is a one-liner! Also, if you liked this problem, you'll surely love the dropWhile function.

function takeWhile (arr, pred) {
    const ind = arr.indexOf(arr.find(x => !pred(x)))
    return arr.slice(0,(ind>=0 ? ind : arr.length))
}

//*****I was able to get this kata very easily thanks to the previous challenge. I will complete the final challenge of this series on another day.