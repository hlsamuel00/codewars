//P: input will be an array of integers. An empty array is possible.
//R: the return should be the average of the array or 0 if the array is empty. 
//E: find_average([1,1,1])  ==>> 1
//   find_average([1,2,3])  ==>> 2
//   find_average([1,2,3,4]) ==>> 2.5

//function find_average(array) {
    // sum all of the integers in the array
    // divide the sum by the number of entries of the array
    // return the average
//}

const find_average = array => array.length ? array.reduce((acc,el) => +acc + el) / array.length : 0

// *****I was able to get this kata very easily and I included pseudo-code :D I'm very happy with this!!