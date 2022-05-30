//P: input will be a positive integer
//R: return should be a string of 1's and 0's the length of the parameter provided. string should start with a 1
//E: stringy(3) ==>> '101'
//   stringy(6) ==>> '101010'
//   stringy(11) ==>> '10101010101'


//function stringy(size) {
    // create an array the length of size
    //map array with either 1 or 0
    //join the array to make a string   
//}

const stringy = size => Array.from({length: size}, (_,i) => !(i % 2) ? 1 : 0).join('')

//*****I was able to get this kata very easily! I also thought through the ternary operator to shorten it. I'm very very pleased at my progress and how quickly I was able to get this!! In looking through the solutions, I located this way to refactor my ternary even further:
const stringy2 = size => Array.from({length: size}, (_,i) => +!(i % 2)).join('')