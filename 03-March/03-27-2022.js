// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    let arr = []
    let element = a
    while (arr.length < (Math.abs(b - a)) + 1){
      arr.push(element)
      element++
    }
    return arr
  }

//*****This one was a bit of a challenge. I looked up an idea of how to do it and found the while loop. I was thinking this would be done with a for loop, but the while loop worked better for this problem. The two best solutions I liked can be found below:

// const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

// function between(a, b) {
//     arr = []
//     for(i = a;i <= b; i++){ 
//         arr.push(i)
//     }
//     return arr
//   }


//=============================================================================================================


