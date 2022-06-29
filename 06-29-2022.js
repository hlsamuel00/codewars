// DESCRIPTION:
// Write a function that will simplify a compound fraction. As input, it should accept three arguments as integers: integer, numerator, and denominator. It should return an array with three items, all integers: [integer, numerator, denominator]. If there should be no integer, or no fraction resulting from simplification, just return zeros in their place.

// There is a convenience function you can use called toString(integer, numerator, denominator). It also takes three integer values, and returns a string of the compound fraction for logging, etc.

// For example:

// // 4 3/2 (four and three halves)
// simplify(4, 3, 2); // == [5, 1, 2]
// // becomes 5 1/2 (five and one half)

// // 15/12 (fifteen twelfths)
// simplify(0, 15, 12); // == [1, 1, 4]
// // becomes 1 1/4 (one and one quarter)
// Note: Beware of 0 denominators and numerators.


function simplify(integer, numerator, denominator) {
    if (numerator % denominator){
      integer += parseInt(numerator/denominator)
      numerator %= denominator
    }
    if (!(denominator % numerator) && numerator != 1){
      denominator /= numerator
      numerator = parseInt(denominator/numerator)
    }
    return numerator && denominator ? [integer, numerator, denominator] : arguments
  } 

//*****My solution passed the test cases, but would not pass the submit/edge cases. In looking through the solutions, i found the code below:

function simplify ( integer, numerator, denominator ) {
    console.log(integer, numerator, denominator); //making arguments visible
    if ( !numerator || !denominator ) return [integer, 0, 0]; //if numerator or denominator is 0, it will return just the integer
    
    const gcd = (a, b) => b ? gcd(b, a % b) : a; //the function for calculating the least common denominator
    const _integer = numerator / denominator | 0; //breaks down the improper fraction and increases the integer
    
    integer += _integer;
    
    if ( numerator === denominator ) return [integer, 0, 0]; //returns just the integer if the num and denom are the same
    if ( numerator > denominator ) numerator %= denominator; //reducing the fraction
    
    const _gcd = gcd(numerator, denominator); //getting the greatest common denominator
    
    return [integer, numerator / _gcd, denominator === _gcd ? 0 : denominator / _gcd]; //returning the results
  }