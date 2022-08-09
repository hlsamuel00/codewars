// Return the Nth Even Number

// Example(Input --> Output)

// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.

//P: input will be a positive integer (>0)
//R: return should be the given even number (0 indexed)
//E: 1 => 0 (the first even number is 0)
  // 3 => 4 (the 3rd even number is 4 (0, 2, 4))
  // 4 => 6 (the 4th even number is 6 (0, 2, 4, 6))
  // 100 => 198 (the 100th even number is 198)
  //1298734 => 2597466
  
  
const nthEven = n => {
    //subtract one from n and double it (by subtracting one from n, we get the 0 index)
    return --n * 2 //we decremented the value of n prior to multiplying 
}

//*****I was able to get this kata fairly easily. I also was able to commment the code to ensure the full PREP method was completed. 