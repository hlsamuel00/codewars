// DESCRIPTION:
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

//P: input will be an array of values [tail, body, head]
//R: output will be the array arranged accordingly [head, body, tail]
//E: fixTheMeerkat(['tail', 'body', 'head']) => ['head', 'body', 'tail']
  // fixTheMeerkat(['tails', 'body', 'heads']) => ['heads', 'body', 'tails']
  // fixTheMeerkat(['bottom', 'middle', 'top']) => ['top', 'middle', 'bottom']
//Question: will the array always be arranged the same?

const fixTheMeerkat = (arr) =>{
    //reverse the array (arr.reverse())
    //return the result
    return arr.reverse()
}

//=============================================================================================================

// DESCRIPTION:
// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// The code provided:
function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number;){
      newArray.push(counter);
    }
    
    return newArray;
}

// Updated code
function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
}

// My code:
const createArray = number => Array.from({length: number}, (_,i) => ++i)