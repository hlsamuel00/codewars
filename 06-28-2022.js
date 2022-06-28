// DESCRIPTION:
// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7
// PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!

const findMissing = (list, m = Math.abs(list[0] - list[list.length-1]) / list.length) => {
    list.sort((a,b) => a - b)
    return list.filter((e,i,a) => a[i] + m != a[i+1] && i != list.length-1)[0] + m
  }

//*****I was able to get this kata without too much difficulty. In looking through the soluions. I found a way to refactor my code further. Below is my refactoring:

const findMissing2 = (l, m = (l[l.length-1] - l[0]) / l.length) => l.find((e,i,a) => e != a[i+1] - m) + m