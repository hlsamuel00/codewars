// DESCRIPTION:
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

//P: input will be a single integer
//R: return should be an array of all of the integers from 1 to the number provided (excluding 0)
//E: monkeyCount(11) => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  // monkeyCount(5) => [1, 2, 3, 4, 5]
  // monkeyCount(1) => [1]

const monkeyCount = n => {
    //set an array with the length of the number provided 
    //map the array with the number starting from 1 to the number provided
    //return the array
        return Array.from({length: n}, (_,i) => ++i)
}