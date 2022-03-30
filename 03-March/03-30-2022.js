// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
// "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
// "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
// "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

// As usual, your function/method should be pure, i.e. it should not mutate the original string.

String.prototype.toAlternatingCase = function () {
    let alternatingCase = this.split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase())
    return alternatingCase.join('')
}

//*****I had a lot of fun building this out!! I excited that i build this that adds a method to a native object. This blew my mind building and I used the previous object classwork to follow the syntax, but i was able to deduce how to document what i wanted, just needed to get the syntax correct.


//=============================================================================================================


// Add an item to the list:

// AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)

// In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.

// P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller)

const addExtra = arr => arr.concat((arr[arr.length-1] + 1))

//*****I found a new method .concat()!! I needed to return a new array and thought that .map() was the way to go, but I used Google-Fu and found .concat() and it creates a new array and doesn't alter the previous arrays!!!!


//=============================================================================================================


// Your Job:
// Find the sum of all multiples of n below m

// Keep in Mind:
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

//     Ex:
//     sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
//     sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
//     sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
//     sumMul(4, -7)  ==> "INVALID"

function sumMul(n,m){
    let sum = 0
    if (m > 0){
      for (let i = 1; i < m; i++){
        if (i % n === 0){
          sum += i
        }
      }
    } else {
      return "INVALID"
    }
    return sum
  }
//*****I was able to get this Kata on the first try!! i was so ecstatic to get this. it had multiple parts, but due to me breaking it down in my head, i was able to see all parts and beast it!!!


//=============================================================================================================


