Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

//     Ex:
//     remove("Hi!") === "Hi"
//     remove("Hi!!!") === "Hi!!"
//     remove("!Hi") === "!Hi"
//     remove("!Hi!") === "!Hi"
//     remove("Hi! Hi!") === "Hi! Hi"
//     remove("Hi") === "Hi"

const remove = str => str.endsWith('!') ? str.slice(0,str.length-1) : str;

//*****I found this answer quickly on the MDN. I was hoping to find a .pop() method for strings, but the slice method works as well, provided you outline the starting index.


//=============================================================================================================

