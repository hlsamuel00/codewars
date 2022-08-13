// DESCRIPTION:
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//P: input will be an array of integers. the array will never be empty
//R: the output should be an integer of the mean of the array
//E: [1, 2, 3, 4, 5] => 3
  // [10, 20, 30, 40, 50] => 30
  // [98, 95, 100] => 97.66667
//Questions: How many decimal places would you like stated? Will teh array contain any other data types other than integers?

const getAverage = marks => {
    //get the sum of all of the elements in the array marks.reduce()
    //divide the array by the number of elements / marks.length
    //return the results

    return parseInt(marks.reduce((acc,el) => acc + el) / marks.length)
}