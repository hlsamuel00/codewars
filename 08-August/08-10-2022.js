// DESCRIPTION:
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

//P: input will be three number type arguments
//R: return should be a boolean returning whether the values are divisible by both numbers (x and y).
//E: isDivisible(3, 1, 3) =>  true because   3 is divisible by 1 and 3
  // isDivisible(12, 2, 6) =>  true because  12 is divisible by 2 and 6
  // isDivisible(100, 5, 3) => false because 100 is not divisible by 3
  // isDivisible(12, 7, 5) => false because  12 is neither divisible by 7 nor 5
//Questions: Will all inputs be numbers? Will they all be positive and/or not equal to 0? 

const isDivisible = (n,x,y) => {
    //determine if n is divisible by x (n % x === 0) or !(n % x)
    //determine if n is divisible by y (n % y === 0) or !(n % y) 
    //return results 
    return !(n % x) && !(n % y)
}

//=============================================================================================================