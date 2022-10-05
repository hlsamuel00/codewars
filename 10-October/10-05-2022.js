// DESCRIPTION:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//P: input will be an array of non-negative integers and strings
//R: output should be an array of integers with the strings removed
//E: filter_list([1,2,'a','b']) => [1,2]
  // filter_list([1,'a','b',0,15]) => [1,0,15]
  // filter_list([1,2,'aasf','1','123',123]) => [1,2,123]

const filter_list = (array) => {
    // filter list to remove strings
        // create conditional to determine if type is number
        // array.filter(el => typeof el == 'number')
        // return the result
    return array.filter(el => typeof el == 'number')
}

// OR

const filterList = (array) => array.filter(Number.isInteger)