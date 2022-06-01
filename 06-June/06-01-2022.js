// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

const arrayPlusArray = (arr1, arr2) => arr1.reduce((acc,el,i) => acc + el + arr2[i], 0)

//*****I was able to get the bug fixed and also refactored the code for efficiency.