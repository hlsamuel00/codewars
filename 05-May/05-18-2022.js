//P: input will be an integer
//R: return should be a square block of integers in a string with a line break (\n) for each square
//E: 1 // Output: '1'
   //1212 //Output: '12
                   //12'

   //123123123 //Output: '123
                       // 123
                       // 123'

   //1234 //Output: 'Not a perfect square!'
   
   const squareIt = int => {
    let sqr = int.toString().length**(1/2)
    let str = int.toString().split('')
    if (!Number.isInteger(sqr)){
      return 'Not a perfect square!'
    } else {
      for (let c = sqr-1; c < int.toString().length-1; c+=sqr){
        str[c] += '\n'
      }
      return str.join('')
    }
  }


//*****I was able to get this, but still left out the pseudo code...AGAIN!! I am committed to getting much better with it!! I also looked at the solutions and devised a way to refactor the code:

function squareIt(int){
    let sqr = int.toString().length
    if (!Number.isInteger(sqr**(1/2))){
        return 'Not a perfect square!'
    } else {
        return int.toString().split('').map((x,i) => !((i+1) % sqr**(1/2)) && i+1 < sqr ? x+='\n' : x).join('')
    }
}