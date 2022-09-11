// DESCRIPTION:
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

//P: input will be a string
//R: output will be an array of each word in the string with the length of the string followed
//E: addLength("apple ban") => ["apple 5", "ban 3"]
  // addLength("you will win") => ["you 3", "will 4", "win 3"]

const addLength = (string) => {
    // split the string into an array (string.split(' '))
    // map over the array to add the length (.map(el => `${el} ${el.length}`))
    // return the result
    return string.split(' ').map(el => `${el} ${el.length}`)
}

//=============================================================================================================

// DESCRIPTION:
// You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!

// Code provided:
items = []
items.push {a: "b", c: "d"}

// Updated code:
let items = []
items.push({a: "b", c: "d"})

//=============================================================================================================

// DESCRIPTION:
// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name
// // PHP only
// duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
// duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]

//P: input will be an array and an integer
//R: output should be the chosen player's name
//E: duck_duck_goose([a, b, c, d], 1) => a.name
  // duck_duck_goose([a, b, c, d], 5) => a.name
  // duck_duck_goose([a, b, c, d], 4) => d.name

const duckDuckGoose = (players, goose) => {
    // subtract one from goose since the count is not zero indexed (goose - 1)
    // obtain index of player by dividing goose by 4 and keeping the remainder ((goose - 1) % players.length)
    // obtain the value of the index (players[(goose - 1) % players.length])
    // obtain the name property (.name)
    // return the result
    return players[(goose - 1) % players.length].name
}

//=============================================================================================================


// DESCRIPTION:
// Task
// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

// Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9)    -> True

//P: input will be an array and a callback function
//R: output should be a boolean whether all elements in the array return true for the function
//E: all([1, 2, 3, 4, 5], greaterThan9) => false
  // all([1, 2, 3, 4, 5], lessThan9) => true

const all = (array, func) => {
    // map through the array to convert values to boolean (array.map(el => func(el)))
    // determine if all elements are true (.every(el => el))
    // return the result (.every() returns a boolean value)
    return array.map(el => func(el)).every(el => el)
}

// OR

const all = (array, func) => array.every(func)

//=============================================================================================================

// Your Task
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False

// I wasn't able to understand this kata, but looking through the solutions, i was able to find a solution that i understood. Below is my version of that code:

const logicalCal = (array, op) => {
    const ops = {
        AND: (bool1, bool2) => bool1 && bool2,
        OR: (bool1, bool2) => bool1 || bool2,
        XOR: (bool1, bool2) => bool1 != bool2
    }
    return array.reduce(ops[op])
}