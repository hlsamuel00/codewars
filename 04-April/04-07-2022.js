// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

const stringClean = (s) =>  s.split('').filter(x => !Array(..."1234567890").includes(x)).join('')


//******I was able to complete this kata with ease. I did have to review the syntax for creating a new array for reference, but a quick trial and error allowed for it to be straigntened out. On the kata i have included specific notes that outline what each part of the arrow function does for the overall program. 


//=============================================================================================================


