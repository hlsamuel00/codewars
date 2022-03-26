// Write a function called repeatStr which repeats the given string string exactly n times.
// Ex:
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let newStr = s;
    for (let i = 1; i < n; i++){
      newStr += s
    }
    return newStr;
}
//*****I was able to complete this relatively easy. I identified that there was a need for a for loop and for it to continue for a set number of times. I set my counter at 1 I set my new string to equal s, i could remove one iteration of the loop. I am truly noticing my progress with completing these challenges. 