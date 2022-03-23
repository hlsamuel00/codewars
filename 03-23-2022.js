// Ask a small girl - "How old are you?". She always says strange things... Lets help her!
// For correct answer program should return int from 0 to 9.
// Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.

function getAge(inputString){
    return Number(inputString[0])
}
//*****This one wasn't too difficult. The solutions outline a use of parseInt() after looking it up, it appears that it does the same thing as Number(). I'll invest more time into understanding the difference, but there are similar methods that do similar things and it's personal preference between using one over the other. 


//=============================================================================================================


// Given an array of integers, return a new array with each value doubled.
// For example:
    // [1, 2, 3] --> [2, 4, 6]

const maps = x => x.map(i => i * 2);

//*****I was able to get this one through breaking down the pattern of the map method and the forEach method. It's amazing to see my progress and the time it's taking to get through these problems. 