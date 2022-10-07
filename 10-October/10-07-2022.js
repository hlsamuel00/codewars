// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//P: input is a string
//R: output should be a boolean whether there are equal number of x's and o's
//E: XO("ooxx") => true
  // XO("xooxx") => false
  // XO("ooxXm") => true
  // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
  // XO("zzoo") => false

const XO = (string) => {
    // determine the number of x's in a string ((string.match(/x/gi) || '').length)
    // determine the number of o's in a string ((string.match(/o/gi) || '').length)
    // create comparison ((string.match(/x/gi) || '').length == (string.match(/o/gi) || '').length)
    // return the result
    return (string.match(/x/gi) || []).length === (string.match(/o/gi) || []).length
}