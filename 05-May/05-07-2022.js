//*******Array Ladder Push******

    //***8kyu***

//Simple, remove the spaces from the string, then return the resultant string.

const noSpace = x => x.split('').filter(x => x!=' ').join('')

//*****This was a simple kata to get. I was able to review the solutions and determined that there was a simpler way to write this function:
const noSpace2 = x => x.split(' ').join('')
//*****By spliting the string by spaces, it created undefined slots on the array and when joined, the undefined slots are not included. 


//=============================================================================================================


    //======7kyu======


