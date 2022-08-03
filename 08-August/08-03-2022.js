// Write reverseList function that simply reverses lists.

//P: input will be an array of varying lengths (including empty arrays)
//R: return should be a reversed version of the list, or an empty array
//E: [] => []
  // [1, 2, 3, 4] => [4, 3, 2, 1]
  // [50, 75, 95, 100] => [100, 95, 75, 50]

//Questions: Can the original array be mutated, or return a new array? Will the input array always contain just numbers or will other data types be included? Will the array always be in ascending order?

//   const reverseList = (arr) => {
    //sort array from greatest to least arr.sort((el,el2) => el2 - el)
    //return the sorted array return arr
// }
const reverseList1 = arr => arr.reverse() //if the original array is sorted and can be mutated

const reverseList2 = (arr) => arr.sort((el,el2) => el2 - el) //if the original array can be mutated and values are not previously sorted

const reverseList3 = arr => [...arr].reverse() //if the original array is sorted and cannot be mutated

const reverseList4 = (arr) => [...arr].sort((el,el2) => el2 - el)//if a new array needs to be produced and values are not previously sorted

//*****I completed a total of 4 options in the event the array could or could not be modified and if the original array was previously sorted. 