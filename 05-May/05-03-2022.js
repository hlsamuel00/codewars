    //======7kyu======

//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).
    
//The input string will only consist of lower case letters and/or spaces.

const getCount = str => Array(...str).reduce((acc,el) => Array('a','e','i','o','u').includes(el) ? ++acc : acc, 0)

//*****I was able to complete this kata fairly easily. I stumbled a bit with the accumulator, but a quick spin on StackOverflow helped resolve it due to the pre/post accumulator breakdown. Because the accumulator value needs to be determined prior to include it in the accumulator.