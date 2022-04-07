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


// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Usage Examples:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

const enough = (cap, on, wait) => cap - on - wait >= 0 ? 0 : Math.abs(cap - on - wait)

//*****I was able to get through this kata well. It was a breeze and I wrote it as an arrow function.


//=============================================================================================================

