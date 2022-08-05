// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

//P: input will be an array and a string. the string will determine whether to return the 'value' or the 'index'of the smallest value
//R: return should be an integer of either the minimum value or the index of the value
//E: min([5, 6, 7, 8, 9], 'value') => 5
  // min([5, 6, 7, 8, 9], 'index') => 0
  // min([1,2,3,4,5], 'value') => 1
  // min([1,2,3,4,5], 'index') => 0
  // min([5, 9, 13, 2, 16], 'value') => 2
  // min([5, 9, 13, 2, 16], 'index') => 3
//Questions: Will the string be any other value other than 'value' or 'index'? 

const min = (arr,toReturn) => {
    //store the value in a variable
    const i = arr.indexOf(Math.min(...arr))
    //establish a conditional to determine if the value should be returned or the index of the value in the array
    return toReturn == 'value' ? arr[i] : toReturn == 'index' ? i : `Invalid Request; please try again`
    //return val or index
}

//*****In looking through the solutions I found a way to use object to provide the value needed. I refactored my code below accordingly. 

const min2 = (arr,toReturn) => {
    const min = {
        value: Math.min(...arr),
        index: arr.indexOf(Math.min(...arr))
    }
    return min[toReturn]
}