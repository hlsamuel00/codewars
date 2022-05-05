    //======7kyu======

// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

// Good Luck!!!

const solve = n => {
    let change = []
        change.push(parseInt(n/500))
      n %= 500
        change.push(parseInt(n/200))
      n %= 200
        change.push(parseInt(n/100))
      n %= 100
        change.push(parseInt(n/50))
      n %= 50
        change.push(parseInt(n/20))
      n %= 20
        change.push(n/10)
  return change.every(x => Number.isInteger(x)) ? change.reduce((acc,el) => acc + el, 0) : -1
}

//*****I was able to get this kata, but wanted to see if i could get it using an array method, but looking through the kata solutions, i found something i could work with and refactored the code below:

const solution = n => n%10 ? -1 : [500,200,100,50,20,10].reduce((acc,el) => (acc + parseInt(n / el), n%=el, acc), 0)