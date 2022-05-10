    //======7kyu======

// back·ro·nym
// An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.

// "Biodiversity Serving Our Nation", or BISON

// (from https://en.oxforddictionaries.com/definition/backronym)

// Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

// The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:

// dict["P"] == "perfect"
// Examples
// "dgm" ==> "disturbing gregarious mustache"

// "lkj" ==> "literal klingon joke"

const makeBackronym = (string) => [...string].map(x => dict[x.toUpperCase()]).join(' ')


//*****I was able to get this kata challenge fairly easily. I attempted to restructure the code, but this appeared to be the most efficient way to do it. 


//=============================================================================================================


    //======7kyu======

// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

const roundToNext5 = n => Math.ceil(n / 5) * 5

//*****I didn't get this kata challenge. I was stuck using mod versus attempting to divide. I'll consider this one a lesson learned. 


//=============================================================================================================


// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super" 

class Ball {
    constructor(ballType){
      this._ballType = ballType || 'regular'
    }
    get ballType(){
      return this._ballType
    }
  }


//*****I was able to get this kata, but circled back to the 8kyus to knock out some of the OOP challenges.


//=============================================================================================================


// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

// You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

class God{
    static create(){
      let humans = [new Man('Adam'), new Woman('Eve')]
      return humans
    }
  }
  
  class Human{
    constructor(name){
      this._name = name
    }
    get name(){
      return this._name
    }
  }

  class Man extends Human{
    constructor(name){
      super(name)
    }
  }
  
  class Woman extends Human{
    constructor(name){
      super(name)
    }
  }

//*****I was able to get this kata challenge very easily. I'm loving how i'm navigating through the OOP challenges. 


//=============================================================================================================


// Classy Classes
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

class Person{
    constructor(name,age) {
      this._name = name
      this._age = age
    }
    
    get name(){
      return this._name
    }
    
    get age(){
      return this._age
    }
    
    getInfo(){
        return `${this.name}s age is ${this.age}` 
    }
    
    get info(){
    return this.getInfo()
     }  
}

//*****I did not follow the instructions appropriately the first time and missed the method request that was in the kata challenge request. Upon reviewing the solutions, i added the missing method to the class above. 


//=============================================================================================================


// Classy Extensions

// Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. You will be preloaded with the Animal class, so you should only edit the Cat class.

// Task

// Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

// The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).


class Cat extends Animal {
    constructor(name){
      super(name)
    }
    speak(){
      return `${this.name} meows.`
    }
}

//*****This was very easy to breeze through, but this is outlining my progress with OOP.


//=============================================================================================================


// Ahoy matey!

// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with a heavy booty on board.

// Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?

// You begin with writing a generic Ship class:

// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
// var titanic = new Ship(15, 10);
// Taking into account that an average crew member on board adds 1.5 units to the draft, a ship that has a draft of more than 20 without crew is considered worthy to loot. Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt
// to decide if the ship is worthy to loot. For example:

// titanic.isWorthIt() // return false
// This Kata teaches you the very basic of method creation.

// Good luck!

class Ship{
    constructor(draft,crew) {
      this.draft = draft
      this.crew = crew
    }
    isWorthIt(){
      return this.draft - (this.crew * 1.5) > 20
    }
  }

//*****I was able to get this kata challenge with ease. 


//=============================================================================================================


// Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

// If the user tries to guess more than the limit, the function should throw an error.
// If the user guess is right it should return true.
// If the user guess is wrong it should return false and lose a life.
// Can you finish the game so all the rules are met?

class Guesser {
    constructor(number, lives) {
        this.number = number;
        this.lives = lives;
    }
    
    guess(n) {
        if(!this.lives){
            throw 'No lives left'
        }

        if(this.number == n){ 
            return true
        }

        else{ 
            this.lives-- 
            return false
        }
    }
}

//*****I wasn't able to get this kata, but looking at the solutions, i was able to understand it and wrote the code above.


//=============================================================================================================


// Hey Codewarrior!

// You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

// Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

// The constructor taking no arguments should assign 0 to Cube's Side property.


class Cube{
    constructor(n) {
      this._side = Math.abs(n) || 0
    }
    getSide() {
      return this._side
    }
    setSide(n){
      this._side = Math.abs(n)
      return this._side
    }
}


//*****I was able to get this kata challenge almost on the first try. I had an error with the setSide() method, but was able to figure it out timely and streamlined the code.


//=============================================================================================================


// SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes
// Objective
// Preloaded for you is a class Dog:

// class Dog {
//   constructor(name, age, gender, species, size, master, loyal) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = species;
//     this.legs = 4;
//     this.size = size;
//     this.master = master;
//     this.loyal = loyal;
//   }
// }
// You are then given a working class Labrador as your initial code.

// class Labrador {
//   constructor(name, age, gender, master) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = "Labrador";
//     this.legs = 4;
//     this.size = "Large";
//     this.master = master;
//     this.loyal = true;
//   }
// }
// Shorten it so that it meets the strict character count requirements for this Kata.

// Quick, get your timer out and get ready to time yourself. Are you ready? Ready, get set, GO!!! :D

class Labrador extends Dog{
    constructor(name, age, gender, master) {
      super(name, age, gender)
      super.species = 'Labrador'
      super.size = 'Large'
      super.master = master
      super.loyal = true
    }
  }


//*****I am not a fan of this kata as the code is WET! I was able to clean it up a bit. I also set my timer and was able to get this done in about 7 mins.

//*****I reviewed the solutions and located a better way to refactor the code. my refactor can be found below:

class Labrador extends Dog{
    constructor(name, age, gender, master){
        super(name, age, gender, 'Labrador', 'Large', master, true)
    }
}


//=============================================================================================================


// Improving Math.round(x)
// Javascript has a handy built-in Math.round(x) method that rounds a number to the nearest integer:

// Math.round(3.14); // Returns 3
// Math.round(17.43); // 17
// Math.round(198.499); // 198
// Math.round(200.5); // 201
// Math.round(1784.76); // 1785
// But that is sometimes not enough! What if we wanted to round 3.1415926535 to two decimal places? While some languages (such as PHP) has a round() function that supports rounding to a specified number of decimal places (e.g. <?php round(3.1415926535, 4); /* 3.1416 (rounded to 4 d.p. as specified) */ ?>), Javascript does not!

// Task
// Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

// You may find the following Math methods useful:

// Math.round(x) (of course)
// Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)


Math.roundTo = (number, precision) => +number.toFixed(precision)


//*****This was a fun kata, but I'm not sure how this relates to OOP.


//=============================================================================================================