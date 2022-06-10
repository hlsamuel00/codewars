// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n){
    let div = 0
    for (let i = 1; i <= n; i++){
      if (!(n%i)){
        div++
      }
    }
    return div
}

//*****I was able to get this kata after a few tries. In looking at the solutions, this one perplexed me the most:
function getDivisorsCnt(n){
    for (var i = 0, r = 0; i <= n; i++)
    if (n % i == 0) r++;
    return r;
  }
//*****This solution appeared to run together as it's not contained. I will dig further into this a bit more. 