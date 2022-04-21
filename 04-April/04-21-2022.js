    // ===7kyu===

// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.
// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.

const isNarcissistic = n => n == n.toString().split('').reduce((acc,x,_,arr) => acc+= x**arr.length, 0)

//*****I was able to get this kata fairly easily. I outlined the code in my head, but struggled a bit getting the details fully addressed (making sure the exponent was the number of digits). Once I figured that out, I had to refresh what the goblin of the reduce method grabbed and in what order. After all of that, it was money!


//=============================================================================================================

