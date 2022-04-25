    //======7kyu======

// Given two numbers x and n, calculate the (positive) nth root of x; this means that being r = result, r^n = x

// Examples
// x = 4     n = 2  -->  2    # the square root of 4 is 2     2^2 = 4
// x = 8     n = 3  -->  2    # the cube root of 8 is 2       2^3 = 8
// x = 256   n = 4  -->  4    # the 4th root of 256 is 4      4^4 = 256
// x = 9     n = 2  -->  3    # the square root of 9 is 3     3^2 = 9
// x = 6.25  n = 2  -->  2.5  #                             2.5^2 = 6.25

// Notes:
// 4 <= x < 10 ^ 20
// 4 <= n <= 50

const root = (x, n) => Math.pow(x,1/n)

//*****I was able to get this kata fairly easily. I recalled from math where rooting a number is the same as a fractional exponent after a quick glance at stack overflow. 


//=============================================================================================================


    //======6kyu======

    // You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

    // Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
    
    // []                                -->  "no one likes this"
    // ["Peter"]                         -->  "Peter likes this"
    // ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
    // ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
    // ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
    // Note: For 4 or more names, the number in "and 2 others" simply increases.

    const likes = names => {
        return names.length == 0 ? 'no one likes this' : 
        names.length == 1 ? names.join('').concat(' likes this') : 
        names.length == 2 ? names.join(' and ').concat(' like this') :
        names.length == 3 ? names[0].concat(', ') + names.slice(1).join(' and ').concat(' like this') : 
        names[0].concat(', ') + names[1] + ` and ${names.length-2} others like this`
      }
    
    //*****I am extremely proud of being able to tackle this one with little difficulty!! I had to restart the code after a few failed attempts, but breaking it down by each case helped me get it resolved. The other solutions look very similar to my solution