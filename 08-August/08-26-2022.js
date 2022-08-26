// DESCRIPTION:
// *** No Loops Allowed ***

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

// https://www.codewars.com/kata/no-loops-1-small-enough

// https://www.codewars.com/kata/no-loops-3-copy-within

//P: input will be an array and either a Number or String
//R: output should be a boolean whether the additional value is included in the array
//E: check([66, 101], 66) => true
  // check(['hello', 'world'], 'hi') => false
  // check(['hello', 'world'], 'hello') => true
  // check([66, 101, 205, 33], 3) => false

const check = (arr, val) => {
    // search the array to determine if the value is included (arr.includes(val))
    // return the result (the .includes() method returns a boolean value)
    return arr.includes(val)
}


//=============================================================================================================


// DESCRIPTION:
// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"

//P: input will be a string
//R: output should be the string if the length is < 3 or an array of the string and the string truncated to two two characters
//E: whoIsPaying('Mexico') => ['Mexico', 'Me']
  // whoIsPaying('Melania') => ['Melania', 'Me']
  // whoIsPaying('Me') => ['Me']
  // whoIsPaying('') => ['']
  // whoIsPaying('I') => ['I']

const whoIsPaying = name => {
  // determine if the input is less than 3 (name.length < 3)
  // create a conditional to parse the two responses ( ? option1 : option2)
      //option1 = [name]
      //option2 = [name, name.slice(0,1)]
  // return the result
  return name.length < 3 ? [name] : [name, name.slice(0,2)] 
}

// Looking through the solutions, i found this unique way to return the results the code is below:
const whoIsPaying2 = name => [...new Set([name, name.slice(0,2)])]
    // the iteration of the set only returns unique values. If the two entries of the array are the same, the iteration only returns one

//=============================================================================================================

// DESCRIPTION:
// Arrow style Functions
// Come here to practice the Arrow style functions Not much else to say good luck!

// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a
// C# => Tools.FromCharCode(97) // a

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//P: input will be an array of numbers
//R: output should be a string made from the array of numbers converted to characters using the String.fromCharCode() method
//E: arrowFunc([84,101,115,116]) => 'Test'
  // arrowFunc([70,85,83,32,82,79,72,32,68,65,72]) => 'FUS ROH DAH'

const ArrowFunc = nums => {
    // map over the array and convert the numbers to strings (nums.map(num => String.fromCharCode(num)))
    // combine the array (.join())
    // return the result
    return nums.map(num => String.fromCharCode(num)).join('')
}

// Looking over the solutions I found this awesome way to do the iteration:
const ArrowFunc2 = (nums) => String.fromCharCode(...nums)
    // the spread operator allows for each individual element of the array to be iterated and converted into a string using the .fromCharCode() method. 

//=========================================================================================================

// DESCRIPTION:
// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

//P: input will be two arrays. The first array will be a string of Countries the second array will be a string of scores matching the country
//R: output should be a string containing the countries that are playing and which team won, or that they played a draw.
//E: uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
  // uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
  // uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

const uefaEuro2016 = (teams, scores) => {
    const [ team1, team2 ] = teams
    const [ score1, score2 ] = scores
    const winner = score1 > score2 ? team1 : team2
    return `At match ${teams.join(' - ')}, ${score1 == score2 ? 'teams played draw.' : `${winner} won!`}`
}

// I wasn't able to get this kata challenge, but looking at the solution, i'm kicking myself for not recalling destructuring to assist with getting details out of the array. I continued to hammer out my thought of using an object and came up with the following code:
const uefaEuro2016 = (teams, scores) =>{
    const game = teams.reduce((acc,team,i) => {
      acc[team] = scores[i]
      return acc
    }, {})
    const result = game[teams[0]] == game[teams[1]] ? 'teams played draw.' : `${teams[scores.indexOf(Math.max(...scores))]} won!`
    return `At match ${teams.join(' - ')}, ${result}`
}

//=============================================================================================================

// DESCRIPTION:
// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// Let's take a look on some examples:

// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we made for your code:

// Function have to count words and not spaces. You have to be sure that you doing it right
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
// Doublecheck that words with chars like -, ', ` are counted right.

//P: input will be a string of at least one word
//R: output should be an integer of the word count of the string
//E: countWords("Hello") => 1 
  // countWords("Hello, World!") => 2
  // countWords("No results for search term `s`") => 6
  // countWords(" Hello") => 1 

const countWords = (string) =>{
    // trim the white space at beginning and end of array (string.trim())
    // separate the words into an array (.split(/\s/g))
    // filter to remove any blank elements in array (.filter(word => word))
    // get the length property of the array (.length)
    // return the result
    return string.trim().split(/\s/g).filter(word => word).length
}