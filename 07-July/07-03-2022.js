// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces
// input: 'CodeWars'
// output 'CdWr oeas'

// S[0] = 'C'
// S[1] = 'o'
// S[2] = 'd'
// S[3] = 'e'
// S[4] = 'W'
// S[5] = 'a'
// S[6] = 'r'
// S[7] = 's'
// Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
// odd ones are 1, 3, 5, 7, so the second group is 'oeas'
// And the final string to return is 'Cdwr oeas'

// Enjoy.


const sortMyString = s => `${[...s].filter((_, i) => !(i % 2)).join('')} ${[...s].filter((_, i) => i % 2).join('')}`


//*****I was able to get this kata challenge fairly easily. I then looked at the solutions and found one that was VERY interesting. I've included the solution below: 

function sortMyString(s) {
    return [...s].reduce((a, c, i) => {
      a[i&1] += c;
      return a;
    }, ['','']).join(' ');
}