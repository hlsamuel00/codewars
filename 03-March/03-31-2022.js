// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    let count = 0
    x.forEach(element => element === 'good' ? count++ : count)
    if (count > 0 && count <= 2){
      return 'Publish!'
    } else if (count === 0){
      return 'Fail!'
    } else if (count > 2){
      return 'I smell a series!'
    }
  }

//*****I was able to get this completed really easily. I spent some time trying to review to see how the code could be refactored, but couldn't find any way to reduce it/make it more efficient. In review of the solutions, I came across a way to reduce it. Here is my attempt at a refactor:

// const well = x => {
//     let count = x.filter(x => x === 'good').length
//     return count < 1 ? 'Fail!' : count < 3 ? 'Publish!' : 'I smell a series!'
// }



