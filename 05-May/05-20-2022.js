//P: You are given an unsorted array of digits between 0 & 100, with one number missing
//R: return the number (integer) missing from the array
//E: 

const missingNo = (nums) => nums.sort((el,el2) => el - el2).filter((x,i) => x != i)[0] - 1 || nums.length

//*****I completed this kata with ease. I was able to work through edge cases where the answer would be either 100 or 0. I was happy with this outcome :D.