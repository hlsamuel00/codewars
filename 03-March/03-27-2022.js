// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    let arr = []
    let element = a
    while (arr.length < (Math.abs(b - a)) + 1){
      arr.push(element)
      element++
    }
    return arr
  }

//*****This one was a bit of a challenge. I looked up an idea of how to do it and found the while loop. I was thinking this would be done with a for loop, but the while loop worked better for this problem. The two best solutions I liked can be found below:

// const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

// function between(a, b) {
//     arr = []
//     for(i = a;i <= b; i++){ 
//         arr.push(i)
//     }
//     return arr
//   }


//=============================================================================================================


// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

function countSheep(num){
    let concat = ""
    for (let i = 1; i <= num; i++){
      concat += `${i} sheep...`
    }
     return concat
  }

//*****This was a little challenging, but I was able to get the answer worked out.


//=============================================================================================================


// Write a function to split a string and convert it into an array of words.

// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]

// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){
    return Array.from(string.split(" "))
  }

//*****I was able to blow through this Kata in like 5 minutes


//=============================================================================================================


// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// Examples (Input -> Output)
// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

function reverseList(list) {
    return list.reverse()
}

//*****I completed this Kata really quickly as well. These daily challenges and being aware of the available functions help with retaining this information.


//=============================================================================================================


// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

const take = (arr, n) => arr.slice(0, n)

//****I completed this kata with a little difficulty. i was able to use the hint to get the .slice() method to reduce the existing array. I initially tried to use .map() because i wanted to make a new array, but I didn't need a new one, just to reduce the existing array. 


//=============================================================================================================


// You get an array of numbers, return the sum of all of the positives ones.

// Ex: [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

const positiveSum = arr => arr.filter(e => e > 0).reduce((acc,c) => acc+=c, 0)

//*****I was able to get through this fairly easily. I stumbled a bit with combining methods, but I was able to get it with a quick review of the MDN.


//=============================================================================================================

// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

const testEven = n => n % 2 === 0 ? true : false

//*****I was able to get through this Kata very easily and challenged myself to do it using the ternary operator to return a boolean.


//=============================================================================================================


// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):
//     deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
//     ('3♣') -> return 'clubs'
//     ('3♦') -> return 'diamonds'
//     ('3♥') -> return 'hearts'
//     ('3♠') -> return 'spades'

function defineSuit(card) {
    if(card.includes('♣')){return 'clubs'}
    if(card.includes('♦')){return 'diamonds'}
    if(card.includes('♥')){return 'hearts'}
    else {return 'spades'}
  }

//*****I struggled with this solely because i couldn't determine how to produce the characters to test. I am frustrated as I could have completed more than i did and attempted to find the symbols later. LESSON LEARNED!!!!


//=============================================================================================================


// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string)
// Ex: 
//     (Input1, Input2 -->Output)
//     "4",  "5" --> "9"
//     "34", "5" --> "39"
//     "", "" --> "0"
//     "2", "" --> "2"
//     "-5", "3" --> "-2"
// Notes: 
//     If either input is an empty string, consider it as zero.
//     Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a,b) {
    return (Number(a) + Number(b)).toString()
}

//*****This was a quick Kata to complete. I enjoyed running through it.


//=============================================================================================================


// Complete the function which converts hex number (given as a string) to a decimal number.

const hexToDec = hexString => parseInt(hexString, 16)

//*****I completed this with some Google-Fu. I was able to understand the parseInt() method. My googling skills are improving. 