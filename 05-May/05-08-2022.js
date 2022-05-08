    //======7kyu======

// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

// For example:

// ['simple', 'is', 'better', 'than', 'complex'] ==> 7
// Do not modify the input list.

const longest = words => Math.max(...words.map(x => x.length))

//*****This kata was really easy to solve. In reviewing the solutions, I didn't find a way to refactor the solution further. That makes me happy :D


//=============================================================================================================


    //======7kyu======

// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space 
// "   space WALK   " => "   Space Walk   " 
// Note: you will be provided atleast one word and should take string as input and return string as output.

const dropCap = n => n.split(' ').map(x => x.length > 2 ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x).join(' ')

//*****I was able to get this kata very easily as well! I am truly noticing my progress!


//=============================================================================================================


    //======7kyu======

// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

// Examples
// ("hello", "world", "l")       ==>  "held"
// ("coding", "anywhere", "n")   ==>  "codinywhere"
// ("jason", "samson", "s")      ==>  "jasamson"
// ("wonderful", "people", "e")  ==>  "wondeople"

const stringMerge = (str1, str2, l) => str1.slice(0,str1.indexOf(l)) + str2.substring(str2.indexOf(l))

//*****I was able to get through this challenge with a quick refresher on the MDN.


//=============================================================================================================


    //======7kyu======

// Given a random string consisting of numbers, letters, symbols, you need to sum up the numbers in the string.

// Note:

// Consecutive integers should be treated as a single number. eg, 2015 should be treated as a single number 2015, NOT four numbers
// All the numbers should be treaded as positive integer. eg, 11-14 should be treated as two numbers 11 and 14. Same as 3.14, should be treated as two numbers 3 and 14
// If no number was given in the string, it should return 0
// Example:

// str = "In 2015, I want to know how much does iPhone 6+ cost?"
// The numbers are 2015, 6

// Sum is 2021.


const sumFromString = (str) => !!str.match(/(\d)+/g) ? str.match(/(\d)+/g).reduce((acc,el) => acc + parseInt(el),0) : 0

//*****I was able to get this kata fairly easily, but i did review the MDN a bit for regex. I also reviewed the solutions and located a way to refactor my code below:

const sumFromString2 = (str)=> str.split(/\D+/g).reduce((acc,el) => +acc + +el) || 0

//*****I was extremely proud of my progress with this one!!