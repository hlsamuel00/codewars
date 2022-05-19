//P: input will be an array of integers and two other integers
//R: return should be a boolean value for whether the two integers are consecutive in the array.
//E: consecutive([1, 3, 5, 7], 3, 7) //Output: false
//   consecutive([1,2,3,4,5], 1, 2)  //Output: true


// const consecutive = (arr, a, b) => {
    //determine the index of a and b in the arr
    //determine if indexes are incrementally higher or lower
    //return boolean
// }

const consecutive = (arr, a, b) => Math.abs(arr.indexOf(a) - arr.indexOf(b)) == 1

//I was able to get this kata, and was able to do the psudocode as well :D I am happy with this outcome!