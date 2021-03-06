// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Ex:
//     * With `name` = "john"  => return "Hello, John!"
//     * With `name` = "aliCE" => return "Hello, Alice!"
//     * With `name` not given 
//       or `name` = ""        => return "Hello, World!"

const  hello = name => {
    if (name == undefined || name == ""){
      return `Hello, World!`
    } else {
      name = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)
      return `Hello, ${name}!`
    }
  }

//*****I was able to get this figured out by using google to combine strings and combining methods. This was a solid challenge. The most clever code can be found below:
// const hello = s =>
//   `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;


//=============================================================================================================


// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."

// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty".

const isLockNessMonster = s => {
    if (s.includes('three fiddy') || s.includes('3.50') || s.includes('three fifty')){
      return true
    } else {
      return false
    }
  }

//*****I have no idea what this Kata was asking for. The solutions made no sense to the problem. The code above is what I wrote. I asked for help from Matt and we'll see how he sees it. 


//=============================================================================================================


// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"

const numberToString = num => num.toString()

//*****This one was an easy pass and took me about 2 mins to complete. 