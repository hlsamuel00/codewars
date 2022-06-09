// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers){
    numbers.sort((el,el2) => el-el2)
    return numbers[0] + numbers[1]
  }

//*****I was able to get this kata fairly easily! I looked at the other solutions and noticed that others were doing the slice and reduce method. I thought about using both, but determined that it was unnecessary calculations when I had the data needed already. 