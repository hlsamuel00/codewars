//Code as fast as you can! You need to double the integer and return it.

const doubleInteger = (i) => i*2

//*****I coded this in less than a minute :D


//=============================================================================================================


    // ===7kyu===

//     Task
// You are given a moment in time and space. What you must do is break it down into time and space, to determine if that moment is from the past, present or future.

// Time is the sum of characters that increase time (i.e. numbers in range ['1'..'9'].

// Space in the number of characters which do not increase time (i.e. all characters but those that increase time).

// The moment of time is determined as follows:

// If time is greater than space, then the moment is from the future. If time is less than space, then the moment is from the past. Otherwise, it is the present moment.

// You should return an array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.

// Examples
// For moment = "01:00 pm", the output should be [true, false, false].

// time equals 1, and space equals 7, so the moment is from the past.

// For moment = "12:02 pm", the output should be [false, true, false].

// time equals 5, and space equals 5, which means that it's a present moment.

// For moment = "12:30 pm", the output should be [false, false, true].

// time equals 6, space equals 5, so the moment is from the future.

// Input/Output
// [input] string moment
// The moment of time and space that the input time came from.

// [output] a boolean array
// Array of three elements, two of which are false, and one is true. The true value should be at the 1st, 2nd or 3rd place for past, present and future respectively.


function momentOfTimeInSpace(moment) {
    let time = moment.split('').filter(x => parseInt(x)).reduce((acc,x) => acc += parseInt(x), 0) 
    let space = moment.split('').filter(x => !parseInt(x)).length
    return Array(time < space, time == space, time > space)
}

//*****I am very proud of this kata because i was able to get this and understand the regex used in the solutions. 


//=============================================================================================================


    // ===7kyu===

// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.
// More examples in the test cases.

// Good luck!

function solve(s){
    if (s != null){
        let upper = s.match(/[A-Z]/g).length || 0
        let lower = s.match(/[a-z]/g).length || 0
        let digit = s.match(/\d/g).length || 0
        let special = s.match(/\W/g).length || 0
        return Array(upper,lower, digit, special)
    } else {
        return null
    }
}
//*****I was able to resolve this using regex. I struggled a bit with combining verification with regex, but have figured out how to refactor the code below from looking at some solutions:

    const solve = s => Array(/[A-Z]/g , /[a-z]/g, /\d/g, /\W/g).map(x => s.match(x).length || 0)


//=============================================================================================================


// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

const makeNegative = num => num <= 0 ? num : -num

//*****I was able to complete this kata very easily.


//=============================================================================================================

// Variable assignment
// Fix the variables assigments so that this code stores the string 'devLab' in the variable name.

var a = "dev"
var b = "Lab"

var name = a + b

//*****This was easy to debug. They didn't have an assignemnt, they were doing a comparison with '==' versus just '='.


//=============================================================================================================


// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

function addFive(num) {
    return num + 5
  }

//*****Another quick and easy bug fix :D