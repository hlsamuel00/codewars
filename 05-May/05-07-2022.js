//*******Array Ladder Push******

    //***8kyu***

//Simple, remove the spaces from the string, then return the resultant string.

const noSpace = x => x.split('').filter(x => x!=' ').join('')

//*****This was a simple kata to get. I was able to review the solutions and determined that there was a simpler way to write this function:
const noSpace2 = x => x.split(' ').join('')
//*****By spliting the string by spaces, it created undefined slots on the array and when joined, the undefined slots are not included. 


//=============================================================================================================


    //======7kyu======

// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

const dontGiveMeFive = (start, end) => Array.from({length:end-start+1}, (_,i) => start+i).filter(x => !x.toString().includes('5')).length

//*****This one was a bit of a doozy because i didnt' read the full breakdown *facepalm* I was still happy i was able to work this out using StackOverflow


//=============================================================================================================


    //======6kyu======

    // Task:
    // Complete the function piecesValue/pieces_value that accepts two arguments, an 8x8 array (arr),representing a chess board and a string (s). Depending on the value of the string s (which can be either "white" or "black") calculate the value of the pieces on the table for the corresponding player(white or black).
    // Empty fields will be marked as a space " " while the fields with pieces look like this:
    
    // "w-king"   //meaning white king
    // "b-bishop" //a black bishop
    // "w-pawn"   //white pawn
    // ...and so on. Preloaded for you there is an object called hash (values in python):
    
    // const hash = Object.freeze({
    //   queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1
    // });
    // Having the estimated value of each piece. This is a rough estimation and the real piece value depends on other factors in game as well ,such as the game being a closed or open one, which can favor either knights or bishops. (If you are interested more about that here: open vs closed game.) But for our purposes we will use the mentioned values.
    // Note: the value of a king cannot be estimated because without it the game would be over, so DO NOT take into consideration the value of the king.You will not be tested for invalid input.
    // Example case:
    // piecesValue([[' ',' ',' ',' ',' ',' ',' ',' '],
    //              [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
    //              [' ','b-king',' ',' ','w-rook',' ',' ',' '],
    //              [' ',' ',' ',' ',' ',' ',' ',' '],
    //              [' ',' ',' ',' ',' ',' ',' ',' '],
    //              ['w-king',' ',' ',' ',' ',' ',' ',' '],
    //              [' ',' ',' ',' ',' ',' ',' ',' '],
    //              [' ',' ',' ',' ',' ',' ',' ',' ']], 
    //              'white');
    // //should be 14 since white has a queen and a rook 
    // //while the same table would return 9 for 'black'
    
    // piecesValue([[' ',' ',' ',' ',' ',' ',' ',' '],
    //              [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
    //              [' ','b-king',' ','b-pawn','w-rook',' ',' ',' '],
    //              [' ',' ',' ',' ','w-pawn',' ',' ',' '],
    //              [' ',' ',' ',' ',' ','w-bishop',' ',' '],
    //              ['w-king',' ',' ',' ',' ',' ',' ',' '],
    //              [' ',' ',' ','b-pawn',' ',' ',' ',' '],
    //              [' ',' ',' ',' ',' ',' ',' ',' ']],
    //              'white');
    // //should return 18 for 'white' (queen, rook, pawn, bishop)
    // //and 11 in case s is 'black'(queen, pawn, pawn)
    // Happy coding warrior!

    const piecesValue = (arr, s) => {
        let c = s == 'white' ?'b' : 'w'
        let pieces = arr.map(x => x.filter(x => x != false)) //removed the blank spaces to see pieces left
        pieces = pieces.map(x => x.filter(x => x.split('-')[0] != c )) //determined the color of pieces to count  
        pieces = pieces.map(x => x.map(x => x.slice(2))) //removes the piece color
        pieces = pieces.map(x => x.map(x => parseInt(hash[x] || 0))) //replaces piece names with corresponding values
        pieces = pieces.map(x => x.reduce((acc,el) => acc + el, 0)).reduce((acc,el) => acc + el, 0) // reduces into a single digit value
        return pieces
      }
    
//*****This definitely took me longer than 20 mins, but I am happy that I was able to get this resolved. Looking over the solutions, I was WAAAYY off, but can partially understand how they were able to get the solutions they got.


//=============================================================================================================


    //======7kyu======

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    return this.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ')
  }

  //*****I did not get this kata because i attempted to write this as an arrow function, versus the standard block notation. Due to that; I will be redoing the 7kyu ladder step.


//=============================================================================================================

