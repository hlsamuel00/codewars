// DESCRIPTION:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    const count = numbers.reduce((acc,el) => (acc[el] = (acc[el] || 0) + 1) && acc, {})
    return +Object.keys(count).sort((a,b) => count[a] - count[b])[0]
}

// OR 

const stray = (numbers) => numbers.find(number => numbers.indexOf(number) === numbers.lastIndexOf(number))