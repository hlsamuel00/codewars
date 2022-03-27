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