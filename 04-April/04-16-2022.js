// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.


const cockroachSpeed = s => Math.floor(s * (1000/36))

//*****A quick google search got me the fraction needed to determine the exact measurement of the conversion, then I implemented the Math.floor() method to get it to round down to the closest integer. 


//=============================================================================================================


// ===***7kyu***===

// Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

// array[0] ---> represents $1 bills

// array[1] ---> represents $5 bills

// array[2] ---> represents $10 bills

// array[3] ---> represents $20 bills

// array[4] ---> represents $50 bills

// array[5] ---> represents $100 bills

// In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills.
    // giveChange(365) // =>  [0,1,1,0,1,3]

// In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills.
    // giveChange(217) // => [2,1,1,0,0,2]


const giveChange = amount => {
    let change = []
      change.unshift(parseInt(amount / 100))
    amount = amount % 100
      change.unshift(parseInt(amount/50))
    amount = amount % 50
      change.unshift(parseInt(amount/20))
    amount = amount % 20
      change.unshift(parseInt(amount/10))
    amount = amount % 10
      change.unshift(parseInt(amount/5))
    amount = amount % 5
      change.unshift(amount)
    return change
}

//*****This kata was a 7kyu, but it was pretty solid to resolve. I reviewed the solutions to determine if i found a code that i liked, but i think i'll try it with the map() method to reduce the length of the code.
