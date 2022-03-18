//Complete the solution so that it reverses the string passed into it.
//ex:
   //'world'  =>  'dlrow'
   //'word'   =>  'drow'

   function solution(str){
    //str.split("").reverse().join("");
    let splitString = str.split("")
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("")
    return joinArray
}
//*****I located this solution on google/stack-overflow. This was identical to an idea i had, but i will be sure to utilize pseudocode to breakdown pieces.


//=============================================================================================================


// Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative. If the input is an empty array or is null, return an empty array.
// ex:
    // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

    function countPositivesSumNegatives(input){
        let arr = []
        let count = 0
        let sum = 0
        if (input == null || input.length == 0){
          return arr
        } else {input.forEach( element => {
            if (element > 0){
              count++
              arr = arr.map(x => count)
          } else if (element < 0){
              sum += element
            } 
            arr = [count, sum]
          })}
        return arr;
    }
//*****This one went beyond the 20 minute time that Leon recommended, but i got it to work for actual inputs, but had to google how to make it return an empty array for null or blank array inputs. I am excited at how far I've come and eager to see where I'll be in a month's time. 