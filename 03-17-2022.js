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
//I located this solution on google/stack-overflow. This was identical to an idea i had, but i will be sure to utilize pseudocode to breakdown pieces.

//=============================================================================================================