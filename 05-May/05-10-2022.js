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