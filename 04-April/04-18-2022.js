// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

const otherAngle = (a, b) => 180 - a - b

//*****This kata was easy to tackle. No complaints and no issues faced.


//=============================================================================================================


// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

const past = (h, m, s) =>{
    //testing for invalid inputs
  if (h < 0 || m < 0 || s < 0){
    return 'Invalid Input'
    //increment the minutes and hours for values over the threshold
  } else if (s > 59){ 
    s = s % 60
    m+=1
  } else if(m > 59){
    m = m % 60
    h+=1
  }
  return ((h*3600) + (m*60) + (s)) * 1000
}


//=============================================================================================================


// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = number => number % 2 == 0 ? number * 8 : number * 9


//*****I got this kata on the first try!!!!!