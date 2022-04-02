// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = str => str.slice(1,-1)

//*****I completed this kata with ease. I ended up writing it and refactoring it before submitting. I am really proud of this. This is the first Kata of the new chapter that I'm starting. I am happy to be in this journey and working towards my purpose. I am in alignment and feel the universe conspiring to assist me with reaching my goals. 

//=============================================================================================================


// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

const points = games => {
    let points = 0
    for (let i = 0; i < games.length; i++ ){
      games[i].charAt(0) > games[i].charAt(games[i].length-1) ? points+=3
        : games[i].charAt(0) === games[i].charAt(games[i].length-1) ? points+=1
        : points +=0
    }
    return points
  }

//*****I was able to get this kata relatively easily, but i struggled getting it to refractor. I am going to submit what i have then review the solutions to see what i can gather from there. I was able to refactor my code below:
// const points = games => {
//     return (games.filter(x => x.charAt(0) > x.charAt(x.length-1)).length * 3) +
//            (games.filter(x => x.charAt(0) === x.charAt(x.length-1)).length)
//   }


//=============================================================================================================


// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

//     Ex:
//     remove("Hi!") === "Hi!"
//     remove("Hi!!!") === "Hi!"
//     remove("!Hi") === "Hi!"
//     remove("!Hi!") === "Hi!"
//     remove("Hi! Hi!") === "Hi Hi!"
//     remove("Hi") === "Hi!"

const remove = string => string.split('').filter(x => x != '!').join('').concat('!')

//*****I was able to get this completed but found the replace() method and will look into exploring the details regarding it. 