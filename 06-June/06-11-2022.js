// DESCRIPTION:
// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:
// evaporator(10, 10, 5) -> 29
// Note:
// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

function evaporator(content, evap_per_day, threshold){ 
    let gas = 100
    let days = 0
    while (gas >= threshold){
      gas -= gas * (evap_per_day / 100)
      days++
    }
    return days
}

//*****I was not fully understanding this kata. I wasn't quite understanding the content, but looking through the solution, i was able to determine how the solution was built.


//=============================================================================================================

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

    const last = x=> x.split(' ').sort((el,el2) => el.charCodeAt(el.length-1) - el2.charCodeAt(el2.length-1))


//*****I was able to get this kata after a few tries :D I'm very happy with my ability to break this down. 