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

// DESCRIPTION:
// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10
// Good luck! Your team knows they can count on you!

//P: input will be a number type
//R: output should be a string '$' followed by the input to two decimal places
//E: formatMoney(3) => '$3.00'
  // formatMoney(3.1) => '$3.10'
  // formatMoney(5.25) => '$5.25'
//Question: How should 0's or no input be handled? Will all input be a number type?

const formatMoney = amount => {
    // format input to a fixed decimal point (.toFixed(2))
    // input the value parsed into the string containing the character (`$${value}`)
    // return the result (`$${amount.toFixed(2)}`)
    //**EDGE CASES**
        // account for invalid inputs (!Number.isNaN())
        // account for empty input (parseFloat())
    return !Number.isNaN(parseFloat(amount)) ? `$${amount.toFixed(2)}` : 'Invalid Entry'
}

//=============================================================================================================

// DESCRIPTION:
// Backstory

// As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:

// Lynn: Alan, there’s that teacher chap.
// Alan: Michael, if he hits me, will you hit him first?
// Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.
// Alan: Yeah, chicken stock.
// Phil: Hello Alan.
// Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.
// Lynn: What do you mean?
// Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.
// Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.

// Task
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

// Note: Input will either be a positive integer (or a string for untyped languages).

//P: input will be a positive integer (> 0)
//R: output should be a phrase "It's hotter than the sun!!" if the input squared is greater than 1000 or "Help yourself to a honeycomb Yorkie for the glovebox" for anything else
//E: apple(4) => "Help yourself to a honeycomb Yorkie for the glovebox."
  // apple(100) => "It's hotter than the sun!!"

const apple = x =>{
    // square the input value (x**2)
    // set up comparison (> 1000)
    // set up conditional with phrases ( ? phrase1 : phrase2)
    // return the results
    return x**2 > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}

//=============================================================================================================