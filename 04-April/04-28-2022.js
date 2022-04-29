// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"

const solution = (a, b) => a.length > b.length ? b+a+b : a+b+a

//*****I was able to get this kata very easily. I also devised a way to determine how to get the kata to work if the shorter length was greater than 1:

const secondSolution = (a,b) => {
    if (b.length < 2 || a.length < 2){
      return 'Invalid string length...please try again'
    }else if (a.length > b.length) {
      return a.slice(0,a.length/2)+b+a.slice(a.length/2)
    }else if (b.length > a.length){
     return b.slice(0,b.length/2)+a+b.slice(b.length/2)
    }
  }