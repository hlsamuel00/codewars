// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

const stringClean = (s) =>  s.split('').filter(x => !Array(..."1234567890").includes(x)).join('')


//******I was able to complete this kata with ease. I did have to review the syntax for creating a new array for reference, but a quick trial and error allowed for it to be straigntened out. On the kata i have included specific notes that outline what each part of the arrow function does for the overall program. 


//=============================================================================================================


// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.


const getGrade = (s1, s2, s3) => {
    let avg = Math.floor((s1 + s2 + s3)/3)
    return avg > 89 ? 'A' : avg > 79 ? 'B' : avg > 69 ? 'C' : avg > 59 ? 'D' : 'F'
}

//*****I was able to ge through this with ease. I feel the creating of the variable was unnecessary, but assisted with the flow of the code. 


//=============================================================================================================