// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])


const oddCount = n => Math.floor(n/2)

//******I was able to get this kata fairly easily, but recognizing the patter is what saved me when focusing on larger numbers. 

//=============================================================================================================


// DESCRIPTION:
// Suzuki has a long list of chores required to keep the monastery in good order. Each chore can be completed independent of the others and assigned to any student. He needs to assign two chores to each student in a way which minimizes the total duration of the day's work. There will always be an even number of chores and enough students to complete them.

// You will be given an array containing the estimated duration of each chore such as:

// 10 ≤ chores length ≤ 30

// chores = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9]

// Return an array with each students work duration in ascending order such that the last element represents the total duration of the day's work. Each integer in the return array is the sum of each students two assigned chores.

// chores = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9]

// Chore 1 = 2hrs 
// Chore 2 = 9hrs

// 2 + 9 = 11 hours duration

// return [7, 8, 8, 10, 10, 11]


function choreAssignment(chores) {
    return chores.sort((a,b) => a-b).map((el,i,arr) => el + arr.pop(-i)).sort((a,b) => a-b).filter(x => x!= undefined)
  }

//******I was able to get this kata with relative ease. I also refactored the code below:
const choreAssignment = chores => chores.sort((a,b) => a-b).map((el,i,arr) => el + arr.pop(-i)).sort((a,b) => a-b).filter(x => x)


//=============================================================================================================