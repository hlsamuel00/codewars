// DESCRIPTION:
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.


//P: input will be a number
//R: output should be the sum of all of the multiples of 3 or 5 below the number input or 0 if the number provided is negative
//E: solution(10) => 23 
  // solution(15) => 35
  // solution(-5) => 0

const solution = (number) => {
    // create an empty array
    let multiples = []
    // create a loop that runs
    for(let i = 0; i < number; i++){
        // create conditional within loop to determine if value is divisible by 3 or 5
        if(!(i%3) || !(i%5)){
            // push value to array
            multiples.push(i)
        }
    }
    // return array
    return multiples.reduce((acc,el) => acc + el, 0)
}

const solution2 = (number) => {
    let sum = 0
      while(number > 0){
          number--
          if(!(number % 3) || !(number % 5)){
              sum += number
          }
      }
      return sum
  }