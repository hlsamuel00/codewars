// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined


const countSheeps = arrayOfSheep => arrayOfSheep.reduce((acc,x) => x == true ? acc+=1 : acc, 0)

//*****I completed this kata on almost the first try. I messed up on the accumulator increment trying to use syntactical sugar. 


//=============================================================================================================


