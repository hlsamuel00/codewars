// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// A few cases:


// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

const isDivideBy = (number, a, b) => number % a == 0 && number % b == 0

//*****I was able to complete this kata with ease. 


//=============================================================================================================


// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20


const century = (year) => Math.ceil(year / 100)

//*****I was able to breeze through this and came up with Math.ceil() to get it to round up. I was proud to have thought if it instantly.