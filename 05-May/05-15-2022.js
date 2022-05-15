//input will be two arrays of random integers
    //the first array will be integers of varying size
    //the second array will be single digit positive integers

//output would be series of tuples where the first entry is the digit from the digit list and the second is the number of times the digit occurs in the initial array.

//Example: integersList = [-18, -31, 81, -19, 111, -888]
    //     digitsList = [1, 8, 4]
    //     l.count_spec_digits(integersList, digitsList) == [(1, 7), (8, 5), (4, 0)]

    //     integersList =  [1, 1, 2 ,3 ,1 ,2 ,3 ,4]
    //     digitsList = [1, 3]
    //     l.count_spec_digits(integersList, digitsList) == [(1, 3), (3, 2)]


// function List(){
//     this.countSpecDigits = function(integersList, digitsList){
//         //get the absolute value of integerList entries
//         //join the array and split each digit of the integerlist array
//         //go thorugh each of the digit list to add the count of digits
//     }
// }

function List(){
    this.countSpecDigits=function(integersList, digitsList){
      integersList = integersList.join('').split('').map(x => +x).filter(x => Number.isInteger(x))
      return digitsList.map(x => [x, integersList.filter(y => y == x).length])
    }
}

//*****I was able to get to this fairly easily using the PREP method helped outline each step of this for me. I also took a time to refactor my code and came up with the code below: 

class List {
    countSpecDigits(integersList, digitsList){
      return digitsList.map(x => [x, integersList.join('').split('').filter(y => y == x).length])
    }
  }

//=============================================================================================================