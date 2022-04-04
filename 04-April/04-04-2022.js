// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Ex:
//     rps('scissors','paper') // Player 1 won!
//     rps('scissors','rock') // Player 2 won!
//     rps('paper','paper') // Draw!

const rps = (p1, p2) => {
    const r = 'rock'
    const s = 'scissors'
    const p = 'paper'
    if ((p1 === r && p2 === s) || (p1 === s && p2 === p) || (p1 === p && p2 === r)){
      return 'Player 1 won!'
    } else if ((p1 === s && p2 === r) || (p1 === p && p2 === s) || (p1 === r && p2 === p)){
      return 'Player 2 won!'
    } else {
      return "Draw!"
    }
  };

//*****I was reviewing the code and attempting to refactor my code, but only located details which appeared around OOP, which we haven't covered yet in class. I'd like to review this kata at a later date to see what i've learned between now and then. 


//=============================================================================================================


// Description:
// Remove all exclamation marks from the end of sentence.

// Ex:
//     remove("Hi!") === "Hi"
//     remove("Hi!!!") === "Hi"
//     remove("!Hi") === "!Hi"
//     remove("!Hi!") === "!Hi"
//     remove("Hi! Hi!") === "Hi! Hi"
//     remove("Hi") === "Hi"

const remove = string => {  
    while (string.endsWith('!')){
      string = string.slice(0,-1)
    }
    return string
  }

//*****I decided to set up a while loop so that it continues to check to ensure the string doesn't end with an '!' this way it can continue the iteration as needed. I still haven't grasped regex completely. All of the solution reference regex so no refactoring to be done until i understand regex more. 


//=============================================================================================================


// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Ex:
//     "hello"     -->  "hll"
//     "codewars"  -->  "cdwrs"
//     "goodbye"   -->  "gdby"
//     "HELLO"     -->  "HELLO"
// Note: don't worry about uppercase vowels and y is not considered a vowel for this kata

function shortcut (string) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return string.split('').filter(x => !vowels.includes(x)).join('');
  }

//*****Another string manipulation problem that i was able to recall from a previous kata completed. This was a breeze to complete.


//=============================================================================================================


// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

// Ex:
// uniTotal("a") == 97 uniTotal("aaa") == 291

const uniTotal = string => string.split('').reduce((acc, x, i) => acc += string.charCodeAt(i),0)

//*****I am proud of this one. The initial code I wrote can be found below. I was able to refactor the code to what's above. I used a for loop to do an accumulation, but realize that i can turn the string into an array and use the .reduce() method to get the same result more efficiently:

// function uniTotal (string) {
//     let acc = 0
//     for (let i = 0; i < string.length; i++){
//       acc += string.charCodeAt(i)
//     }
//     return acc
//   }


//=============================================================================================================


// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


const DNAtoRNA = dna => dna.split('').map(x => x == "T" ? "U" : x).join('')

//*****string manipulation again. I am getting better with this, but it's also challenging me to get better with array methods as well!


//=============================================================================================================

