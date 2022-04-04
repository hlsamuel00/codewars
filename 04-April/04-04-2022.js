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


