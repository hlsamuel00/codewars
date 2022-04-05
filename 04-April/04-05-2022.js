// Write a function which converts the input string to uppercase.

const makeUpperCase = str => str.toUpperCase()

//*****This was a breeze to complete. I am noticing how it's much easier to reall available methods for objects. 


//=============================================================================================================


// Story:
// You are going to make toast fast, you think that you should make multiple pieces of toasts and once. So, you try to make 6 pieces of toast.

// Problem:
// You forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.

// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.

// Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
// six_toast(5) == 1

// And in case of 12 you need 6 toasts less (but not -6):
// six_toast(12) == 6

const sixToast = num => Math.abs(num - 6)

//*****This one was also easy to complete. I challenged myself to write it in a way that would determine if the some needed to be put in or taken out. Here is my code:

// const sixToast = num => num - 6 >= 0 ? `Take out ${num-6} toasts` : `Put in ${Math.abs(num-6)} toasts`


//=============================================================================================================


// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

const updateLight = current => current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green'

//*****I was able to write this code easily, but wanted to get a better understanding of the map object. This was my refactor using map:

    // const updateLight = (current) => (
    //     {red: 'green',
    //      yellow: 'red',
    //      green: 'yellow'}
    //   )[current]

//I'm not a 100% fan if it, it seems the code above is much more clearcut and readable. 


//=============================================================================================================