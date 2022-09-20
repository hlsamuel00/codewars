// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

//P: input will be an array of 10 integers
//R: output should be a string of the phone number formatted correctly
//E: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => "(123) 456-7890"

const createPhoneNumber = (numbers) => {
    // create slices of numbers (areaCode = numbers.slice(0,3), pre = numbers.slice(3,-4), end = numbers.slice(-4))
    // create a template literal (`(${numbers.slice(0,3).join('')}) ${numbers.slice(3,-4).join('')}-${numbers.slice(-4).join('')}`)
    // return the result
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,-4).join('')}-${numbers.slice(-4).join('')}`
}

// in looking through the solutions i found the extremely clever solution below:
function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx";
    
    for(let i = 0; i < numbers.length; i++){
      format = format.replace('x', numbers[i]);
    }
    return format;
  }