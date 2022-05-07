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