    // ===7kyu===

// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.
// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.

const isNarcissistic = n => n == n.toString().split('').reduce((acc,x,_,arr) => acc+= x**arr.length, 0)

//*****I was able to get this kata fairly easily. I outlined the code in my head, but struggled a bit getting the details fully addressed (making sure the exponent was the number of digits). Once I figured that out, I had to refresh what the goblin of the reduce method grabbed and in what order. After all of that, it was money!


//=============================================================================================================


// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

const openOrSenior = data => data.map(x => x[0] > 54 && x[1] > 7 ? 'Senior' : 'Open')

//*****I was able to get this kata challenge relatively easily, but didn't understand the parameters. I was thinking the handicap needed to be lower to be considered "greater" but it was outlining senior as being in a handicapped category. In reviewing the code I loved how clear the following code was:
   const openORSenior = data => data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open')