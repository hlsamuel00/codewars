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