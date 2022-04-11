// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
//     Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


const betterThanAverage = (classPoints, yourPoints)=> yourPoints > ((classPoints.reduce((acc,c) => acc+=c,0)) + yourPoints) / (classPoints.length+1)

//*****The most difficult part of this challenge was ensuring that order of operations was executing correctly. THis would have been resolved on the first try, but due to parentheses it threw the first test off


//=============================================================================================================