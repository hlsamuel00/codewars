// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// It should look like this:
    // Sam Harris => S.H
    // patrick feeney => P.F

const abbrevName = name => name.split(' ').map(x => x.slice(0,1)).join('.').toUpperCase()

//*****I was able to complete this kata relatively easily. 


//=============================================================================================================


// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

const findNeedle = haystack => {
    if (haystack == undefined){
      return "Your function didn't return anything"
    } else {
      let p = haystack.findIndex(x => x == 'needle')
      return `found the needle at position ${p}`
    }
  }

//*****I completed this with a quick MDN review of the findIndex() method. I am curious to see how the code can be refactored. I refactored the code to:

// const findNeedle = haystack => haystack == undefined ? "Your function didn't return anything" :
//                    'found the needle at position ' + haystack.findIndex(x => x == 'needle')
  