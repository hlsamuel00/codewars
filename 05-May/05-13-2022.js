    //======7kyu======

// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

//P: inputs will be integers > 0
//R: integer
//E: 

function mygcd(x,y){
    let divisorsX = []
    let divisorsY = []
    for (let i = 1; i <= x; i++){
      if (x % i == 0){
        divisorsX.push(i)
      }
    }
    for (let j = 1; j <= y; j++){
      if (y % j == 0){
        divisorsY.push(j)
      }
    }
    return Math.max(...divisorsY.filter(el => divisorsX.includes(el)))
  }

//*****I wrote this and it works, but times out because the random integer checks are extremely long and the server times out with the larger numbers due to the calculations needed. In looking at the solutions. I don't want to uncover the solutions to this one just yet. I will revisit it when I'm able to refactor to a more efficient code. In my stubbornness I was able to refactor the code to what's below:  
    function mygcd(x,y){
        let divisorsX = []
        for (let i = 1; i <= x; i++){
        if (x % i == 0){divisorsX.push(i)}
        }
        return Math.max(...divisorsX.filter(x => y % x == 0))
    }
//*****After unlocking the solutions, I found several that were much more refined: 
    const mygcd = (x, y) => y ? mygcd(y, x % y) : x;
