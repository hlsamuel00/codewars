// DESCRIPTION:
// Yet another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to remove the longest prefix of elements such that the predicate is true for each element. We'll call this the dropWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

// function isEven(num) {
//   return num % 2 === 0;
// }
// var seq = [2,4,6,8,1,2,5,4,3,2];

// dropWhile(seq, isEven) // -> [1,2,5,4,3,2]
// Your task is to implement the dropWhile function. If you've got a span function lying around, this is a one-liner! Alternatively, if you have a takeWhile function on your hands, then combined with the dropWhile function, you can implement the span function in one line. This is the beauty of functional programming: there are a whole host of useful functions, many of which can be implemented in terms of each other.

function dropWhile(arr, pred) {
    const ind = arr.indexOf(arr.find(x => !pred(x)))
    return arr.slice((ind >= 0 ? ind : arr.length))
  }

//*****I was able to get this kata very easily due to having done the span, but I wanted to refactor the code a bit to utilize while since the name of the kata is dropWhile. I refactored the code below for a while loop.

function dropWhile(arr, pred, ind = 0) {
    while(ind < arr.length && pred(arr[ind])){ ind++ }
    return arr.slice(ind)
}


//=============================================================================================================


//*****I revisited the take while kata to rewrite the code as a while function!!

// Here's another staple for the functional programmer. You have a sequence of values and some predicate for those values. You want to get the longest prefix of elements such that the predicate is true for each element. We'll call this the takeWhile function. It accepts two arguments. The first is the sequence of values, and the second is the predicate function. The function does not change the value of the original sequence.

// Example:
// sequence : [2,4,6,8,1,2,5,4,3,2]
// predicate: is an even number
// result   : [2,4,6,8]
// Your task is to implement the takeWhile function.

// If you've got a span function lying around, this is a one-liner! Also, if you liked this problem, you'll surely love the dropWhile function.

function takeWhile (arr, pred, ind = 0) {
    while (ind < arr.length && pred(arr[ind])) {ind++}
    return arr.slice(0,ind)
}


//=============================================================================================================