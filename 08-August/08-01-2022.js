// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

const findUniq = (arr) => {
    const obj = arr.reduce((map,el) => {
      map[el] = (map[el] || 0) + 1
      return map
    }, {})
    return Number(Object.keys(obj).filter(val => obj[val] == 1))
}

//*****I was able to get this kata challenge fairly easily and used google fu to understand how to get the object just right with reduce.