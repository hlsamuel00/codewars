// DESCRIPTION:
// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Of course, the existing Array.prototype.filter() function has been undefined for the purposes of this Kata.

Array.prototype.filter = function(func){
    let newArr = []
    for (el of this){
      if (func(el)){
        newArr.push(el)
      }
    }
    return newArr
}

// OR

Array.prototype.filter = function(func){
    return this.reduce((acc,el) => func(el) ? [...acc, el] : acc, [])
}

//=============================================================================================================

// DESCRIPTION:
// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

//P: input will be an array and optionally an integer
//R: return should be the the first element if the integer is not defined, if the integer is defined, the element should be length of the number provided.
//E: first(arr) //=> ['a'];
  // first(arr, 2) //=> ['a', 'b']
  // first(arr, 3) //=> ['a', 'b', 'c'];
  // first(arr, 0) //=> [];

const first = (arr, idx = 1) => {
    // slice the first index of the array and set idx = 1 or the value entered (.slice(0, idx))
    // return the result
    return arr.slice(0, idx)
}

//=============================================================================================================

