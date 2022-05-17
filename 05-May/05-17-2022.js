//P: input will be a string argument into a method.
//R: Output will be a string to each method call
//E:  var joe = new Person('Joe');
    //joe.greet('Kate'); // Output: 'Hello Kate, my name is Joe'
    //joe.name           // Output: 'Joe'
    
    //const harvey = new Person('Harvey')
    //harvey.greet('Jaz') // Output: 'Hello Jaz, my name is Harvey'
    //harvey.name         // Output: 'Harvey'

class Person{
    constructor(name){
        this.name = name
    }
    greet(name){
        return `Hello ${name}, my name is ${this.name}`
    }
}

//*****I was able to get this kata as well. I am still struggling a bit with pseudo-code, but i will continue to practice to get better. 


//=============================================================================================================


//P: input will be a string; write one line function (arrow function); if provided with empty string, integer, or an array, return 'Broken!'
//R: the string will return the input string without a's or e's, or 'Broken!' if response is not a string
//E: onePunch('Beard Knife Grenade Motorbike Hat'), 'Brd Grnd Ht Knif Motorbik')

const onePunch = items => typeof items == 'string' && items.length ? items.split(' ').sort((el,el2) => el.localeCompare(el2)).map(x => x.split('').filter(x => x.toLowerCase() != 'e' && x.toLowerCase() != 'a').join('')).join(' ') : 'Broken!'
//test for string
//turn string into an array
//sort array alphabetically
//filter through array for e's and a's and remove them
//join the array back to string

//*****I was able to get this kata with a bit of time, but looking through the solutions, i was able to refactor my code below:

const onePunch2 = items => typeof items == 'string' && items.length ? items.split(' ').sort().join(' ').replace(/[aeAE]/g,'') : 'Broken!'