Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

//     Ex:
//     remove("Hi!") === "Hi"
//     remove("Hi!!!") === "Hi!!"
//     remove("!Hi") === "!Hi"
//     remove("!Hi!") === "!Hi"
//     remove("Hi! Hi!") === "Hi! Hi"
//     remove("Hi") === "Hi"

const remove = str => str.endsWith('!') ? str.slice(0,-1) : str;

//*****I found this answer quickly on the MDN. I was hoping to find a .pop() method for strings, but the slice method works as well, provided you outline the starting index.


//=============================================================================================================


// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

//     Ex:
//     area_or_perimeter(6, 10) --> 32
//     area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = (l , w) => l === w ? l**2 : 2 * (l + w)

//*****This was easy to work through. I was able to get it, but had to google the exponential operator as i was missing the exponent of 2 *facepalm*