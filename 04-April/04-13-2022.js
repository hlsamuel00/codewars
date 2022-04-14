// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number){
    let word = {1:'One', 2:'Two', 3:'Three', 4:'Four', 5:'Five',
               6: 'Six', 7:'Seven', 8:'Eight', 9:'Nine', 0:'Zero'}
    return !isNaN(number) ? word[number] : 'Invalid Input'
  }
//*****This kata was easy to complete. I struggled with some sintax to limit edge cases, but overall, it went swimmingly!!