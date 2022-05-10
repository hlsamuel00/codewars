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