// DESCRIPTION:
// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

//P: input will be a string. The string represents the animal encountered by the frog
//R: output should be a string (either wide or small) depending on the animal encountered
//E: mouthSize('boar') => 'wide'
  // mouthSize('aLliGaTor') => 'small'
  // mouthSize('alligator') => 'small'
  // mouthSize('frog') => 'wide'
  // mouthSize('fRoG') => 'wide'

const mouthSize = animal => {
    // make all letters in parameter lowercase (animal.toLowerCase())
    // compare to condition (== 'alligator')
    // determine outcome with conditional statement (? small : wide)
    // return the results
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
}

//=============================================================================================================

// DESCRIPTION:
// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples(Input ==> Output)
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false

//P: input will be either a string or number type
//R: output should be a boolean whether the input can be read the same backwards or forwards
//E: isPalindrome('anna') => true
  // isPalindrome('walter') => false
  // isPalindrome(12321) => true
  // isPalindrome('skie0eisk') => true
//Question: Will the input be separated by any spaces or special characters?

const isPalindrome = input => {
    // **EDGE CASE** account for spaces in input (input.replace(/\s/g))
    // account for the number input and convert to string (.toString())
    const newInput = input.toString().replace(/\s/g, '')
    // split string into an array (input.split('') or [...input])
    // reverse the array (.reverse())
    // put array back together (.join(''))
    // compare the reverse to the original string (==)
    // return the comparison (comparison generates a boolean value)
    return newInput === [...newInput].reverse().join('')
}

//=============================================================================================================
