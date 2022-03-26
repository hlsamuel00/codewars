// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
//     Ex:
//     arr1 = [1, 2, 3, 4, 5];
//     arr2 = [6, 7, 8, 9, 10];
//     mergeArrays(arr1, arr2);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//     arr3 = [1, 3, 5, 7, 9];
//     arr4 = [10, 8, 6, 4, 2];
//     mergeArrays(arr3, arr4);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//     arr5 = [1, 3, 5, 7, 9, 11, 12];
//     arr6 = [1, 2, 3, 4, 5, 10, 12];
//     mergeArrays(arr5, arr6);  // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

function mergeArrays(arr1, arr2) {
    let newArr = arr1
    arr2.forEach(element => {
      if (newArr.includes(element)){
        return newArr
      } else {
        newArr.push(element)
      }})
    newArr = newArr.sort((a,b) => a - b);
    return newArr
}
//*****I struggled a little with this one. I knew exactly what I needed, but had to use Google-fu to understand how to state what i wanted. The syntax for the if conditional within the for.Each() method was a bit tricky, but i was able to get through it by noticing the pattern.


//=============================================================================================================


// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//      Ex:
//      ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
    return words.join(' ')
};

//*****This was really easy to complete. I was able to do this with just the memory of what we've been working on in class. 


//=============================================================================================================


// Write a function that checks if a given string (case insensitive) is a palindrome.

const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('') ? true : false;

//*****This was pretty easy to complete as well. This was similar to what we completed in class. I decided to make it an arrow function. It's a bit long so i was considering to make it into a block, but I love practicing my arrow functions. 


//=============================================================================================================


// Implement a function which convert the given boolean value into its string representation.
//     Note: Only valid inputs will be given.

function booleanToString(b){
    return b.toString();
}

//*****This was very easy to complete. I feel like I'm on a roll with these today. I love the regularity that these daily challenges are providing!


//=============================================================================================================


// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.
// If you can, try writing it in one line of code.

const findDifference = (a, b) => Math.abs(a.reduce((acc,c) => acc * c, 1) - b.reduce((acc,c) => acc * c, 1))

//*****This was a good challenge. I was able to easily get the code on a single line, but forgot to include an option if b was greater than a (producing a negative number). I used Google-Fu and found the Math.abs() method that converted the negative value to a positive integer and I easily integrated it into my code.