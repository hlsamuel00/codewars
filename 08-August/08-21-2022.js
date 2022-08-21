// DESCRIPTION:
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'
// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied

function greet(lang) {
    const language = {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso',
      default: 'Welcome'
    }
    return language[lang] || language.default
}

//=============================================================================================================

// DESCRIPTION:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//P: input will be an array of strings
//R: output should be the first element in the list sorted alphabetically with '***' between each letter.
//E: twoSort(['hello', 'my', 'name', 'is', 'Harvey']) => 'H***a***r***v***e***y'
  // twoSort(['alpha', 'charlie', 'bravo', 'papa', 'unicorn']) => 'a***l***p***h***a'
  // twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) => 'b***i***t***c***o***i***n'
//Questions:


const twoSort = strings => {
    // create a new map/new array to not modify the existing array [...strings]
    // sort array alphabetically .sort()
    // return the first value of array [0]
    // separate the item (either spread operator (...) or .split())
    // join it back together with the desired separator .join('***')
    // return the result
    return [...[...strings].sort()[0]].join('***')
}