// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

//P: input will only be strings with upper and lower case letters.
//R: return should be the string in alphabetical order with the captial letter in front
//E: 'aAbaBb' => 'AaaBbb'
//   'AbcBccCaa' => 'AaaBbCcc'
//   'CxssXScc' => 'CccSssXx'

function findChildren(dancingBrigade) {
    const letters = [...new Set(dancingBrigade.toLowerCase())].sort()  //place all letters in array alphabetically
    return letters.map(l => [...dancingBrigade].filter(le => le.toLowerCase() == l).sort()).flat().join('')
    //place like letters in an internal array | .map()
    //sort array with leading letters | .filter() & .sort()
    //flatten array | .flat()
    //flatten array again | .join()
}

//*****I used the full PREP method on this kata and completed it. This was a 6kyu problem that took me a little over an hour to complete. It was really fun to complete and go through the challenges. 