// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

//P: input will be an integer
//R: return should be the next perfect square or -1 to indicate the provided integer is not a perfect square.
//E: 121 => 144
  // 625 => 676
  // 114 => -1 since 114 is not a perfect square


const findNextSquare = (sq) => {
    return Number.isInteger(sq ** .5) ? ((sq ** .5) + 1)** 2 : -1 
    //determine if the input is a perfect square Number.isInteger(sq ** .5)
    //increment the integer and square it (sq ** .5) ** 2
}