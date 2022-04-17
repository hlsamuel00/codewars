//     *****7KYU*****

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

const solution = nums => nums == null ? [] : nums.sort((el, el2) => el - el2)

//*****I was able to complete this kata with relative ease. I placed the conditional to review the empty array or null value to produce an empty array


//=============================================================================================================



