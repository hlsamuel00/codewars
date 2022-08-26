// DESCRIPTION:
// *** No Loops Allowed ***

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

// https://www.codewars.com/kata/no-loops-1-small-enough

// https://www.codewars.com/kata/no-loops-3-copy-within

//P: input will be an array and either a Number or String
//R: output should be a boolean whether the additional value is included in the array
//E: check([66, 101], 66) => true
  // check(['hello', 'world'], 'hi') => false
  // check(['hello', 'world'], 'hello') => true
  // check([66, 101, 205, 33], 3) => false

const check = (arr, val) => {
    // search the array to determine if the value is included (arr.includes(val))
    // return the result (the .includes() method returns a boolean value)
    return arr.includes(val)
}


//=============================================================================================================


// DESCRIPTION:
// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"

//P: input will be a string
//R: output should be the string if the length is < 3 or an array of the string and the string truncated to two two characters
//E: whoIsPaying('Mexico') => ['Mexico', 'Me']
  // whoIsPaying('Melania') => ['Melania', 'Me']
  // whoIsPaying('Me') => ['Me']
  // whoIsPaying('') => ['']
  // whoIsPaying('I') => ['I']

const whoIsPaying = name => {
  // determine if the input is less than 3 (name.length < 3)
  // create a conditional to parse the two responses ( ? option1 : option2)
      //option1 = [name]
      //option2 = [name, name.slice(0,1)]
  // return the result
  return name.length < 3 ? [name] : [name, name.slice(0,2)] 
}

// Looking through the solutions, i found this unique way to return the results the code is below:
const whoIsPaying2 = name => [...new Set([name, name.slice(0,2)])]
    // the iteration of the set only returns unique values. If the two entries of the array are the same, the iteration only returns one

//=============================================================================================================