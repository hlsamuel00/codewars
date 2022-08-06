// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */


//P: input will be an integer either positive or negative.
//R: return should be a boolean determining whether the integer provided is prime or not
//E: isPrime(1) => false
  // isPrime(2) => true
  // isPrime(11) => true

const isPrime = num => {
    //loop through to determine if the number has multiples
        //establish a loop from 2 to num ** .5
        for (let i = 2; i <= num ** .5; i++){
            if (!(num % i)){
                return false
            }
        }
    //determine if num is greater than 1
    return num > 1        
}

//*****I was able to get this kata with a bit of googlefu, but in looking through the solutions, i found one that was EXTREMELY clever. the code can be found below:

function isPrime(num, even = 2) {
    while ((even * even <= num) && (num % even != 0)) { even++ }
    return even * even > num && num > 1
}