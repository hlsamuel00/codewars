// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

//P: input will be a Polish String
//R: output should be the string with all characters converted to standard characters
//E: correctPolishLetters("Jędrzej Błądziński") => "Jedrzej Bladzinski"

const correctPolishLetters = string => {
    // convert polish letters into an object (const polishLetters = {})
    // convert string into an array ([...string])
    // map through the array and replace the polish characters with English characters (.map(letter => polishLetters[letter] || letter))
    // join the array (.join(''))
    // return the result
    const polishLetters = {
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        ó: "o",
        ś: "s",
        ź: "z",
        ż: "z"
    }
    return [...string].map(letter => polishLetters[letter] || letter).join('')
}