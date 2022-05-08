    //======7kyu======

// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

// For example:

// ['simple', 'is', 'better', 'than', 'complex'] ==> 7
// Do not modify the input list.

const longest = words => Math.max(...words.map(x => x.length))

//*****This kata was really easy to solve. In reviewing the solutions, I didn't find a way to refactor the solution further. That makes me happy :D


//=============================================================================================================


