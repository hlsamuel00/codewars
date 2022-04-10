//========Today I will be attempting 7kyu problems!!!========//

// Create a function that takes an array of letters, and combines them into words in a sentence.

// The array will be formatted as so:

// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

// Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

// Examples:

//     arrAdder([
//     ['J','L','L','M'],
//     ['u','i','i','a'],
//     ['s','v','f','n'],
//     ['t','e','e','']
//     ]) // => "Just Live Life Man"

//     arrAdder([ 
//       [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
//       [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
//       [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
//       [ '', 'o', '', '', 'e', '', '', 'l' ],
//       [ '', 'c', '', '', 'r', '', '', '' ],
//       [ '', 'h', '', '', 'h', '', '', '' ],
//       [ '', 'o', '', '', 'o', '', '', '' ],
//       [ '', 'n', '', '', 'u', '', '', '' ],
//       [ '', 'd', '', '', 's', '', '', '' ],
//       [ '', 'r', '', '', 'e', '', '', '' ],
//       [ '', 'i', '', '', '', '', '', '' ],
//       [ '', 'a', '', '', '', '', '', '' ] ]) // => "The Mitochondria is the powerhouse of the cell"

const arrAdder = arr => {
    let arr2 = []
    for (let i = 0; i < arr[0].length;){
      let arr3 =[]
      for (let j = 0; j < arr.length; j++){
        if (arr[j][i] != ''){
          arr3.push(arr[j][i])
          }
      }
      arr2.push(arr3.join(''))
      i++
    }
}

//*****I looked through the solutions and found the code below:
    const arrAdd = arr => arr[0].map((_,i) => arr.map((_,j) => arr[j][i]).join('')).join(' ')
//*****I still can't quite figure out how it omits the blank/undefined cells in the arrays.


//=============================================================================================================


// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
//     a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
//     a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
//     mxdiflg(a1, a2) --> 13

// Bash note:
//     input : 2 strings with substrings separated by ,
//     output: number as a string


function mxdiflg(a1, a2) {
    if (a1.length == 0 || a2.length ==0) return -1 
    let xMax = Math.max(...a1.map(x=>x.length))
    let yMax = Math.max(...a2.map(x=>x.length))
    let xMin = Math.min(...a1.map(x=>x.length))
    let yMin = Math.min(...a2.map(x=>x.length))
    return Math.max(Math.abs(xMax-yMin) , Math.abs(yMax-xMin))
  }

//*****I was able to get this kata from looking at a solution. Although the breakdown makes sense, i don't understand it under the parameters set for the problem. 