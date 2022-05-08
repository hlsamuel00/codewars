    //======7kyu======

// Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

// For example:

// ['simple', 'is', 'better', 'than', 'complex'] ==> 7
// Do not modify the input list.

const longest = words => Math.max(...words.map(x => x.length))

//*****This kata was really easy to solve. In reviewing the solutions, I didn't find a way to refactor the solution further. That makes me happy :D


//=============================================================================================================


    //======7kyu======

// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space 
// "   space WALK   " => "   Space Walk   " 
// Note: you will be provided atleast one word and should take string as input and return string as output.

const dropCap = n => n.split(' ').map(x => x.length > 2 ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x).join(' ')

//*****I was able to get this kata very easily as well! I am truly noticing my progress!


//=============================================================================================================