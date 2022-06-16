// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

const add = (val,val2) => val + val2
const sub = (val,val2) => val - val2
const mult = (val,val2) => val * val2
const div = (val,val2) => val / val2

const basicOp = (operation, value1, value2) =>{
  if (operation === '+'){return add(value1, value2)}
  if (operation === '-'){return sub(value1, value2)}
  if (operation === '*'){return mult(value1,value2)}
  if (operation === '/'){return div(value1, value2)}
  else {return 'Invalid Operation; please try again'}
}

//*****I was able to get this kata challenge very easily, but looking over the solutions, two solutions piqued my interest: 

const basicOp = (o, a, b) => eval(a+o+b)

/*AND */

function basicOp(operation, value1, value2){
  const cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  }
  return cases[operation]
}

//*****I love the first one for how succinct it is, but I love the second one for being object oriented. 