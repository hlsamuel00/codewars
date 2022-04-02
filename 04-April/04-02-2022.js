// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// It should look like this:
    // Sam Harris => S.H
    // patrick feeney => P.F

const abbrevName = name => name.split(' ').map(x => x.slice(0,1)).join('.').toUpperCase()

//*****I was able to complete this kata relatively easily. 
