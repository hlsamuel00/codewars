//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
    let prod = []
 for (let i = 0; i <= n; i++){
   prod.push(2**i)
 }
     return prod
}
// *****I struggled bad with this solution. I wasn't able to full grasp the declaration of the array OUTSIDE of the for loop. I showed the solution, so i did not gain any kata points for this submission.


//=============================================================================================================


//Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
    number = number * -1
    return number
  }

// *****This solution came pretty simply. I did locate a simpler way to code this looking at some of the solutions, but appreciate how I was able to deduce this one.


//=============================================================================================================


//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//Note: input will never be an empty string

function fakeBin(x){
    x = x.replace(/[0-4]/g, "0")
    x = x.replace(/[5-9]/g, "1")
    return x
}
// *****With a quick google, I was able to get this one resolved relatively quickly. I appreciate how I'm honing my googling skills to be able to find what i need and go from there. 