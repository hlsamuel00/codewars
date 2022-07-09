// DESCRIPTION:
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

const calc = (x) => {
    const total1 = [...x].map(x => x.charCodeAt()).join('').split('')
    const total2 = total1.map(x => x == 7 ? 1 : x)
    return total1.reduce((acc,el) => +acc + +el) - total2.reduce((acc,el) => +acc + +el) 
}

//*****I was able to get this kata using math, but also located a pattern after looking through the solutions. below is my refactored code:

const calc2 = (x) => [...x].map(x => x.charCodeAt(0)).join('').split('').filter(x => x == 7).length * 6