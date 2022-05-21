//input will be an array of varying size. if the array is empty or just one element, should change result. 
//the output of the array should be the sum of the differences between the elements
//Example: [1, 2, 10] -> [10, 2, 1] --> [(10-2) + (2 -1)]  --->> Output: 8
//         [-3, -2, -1] -> [-1, -2, -3] --> [(-1 - -2) + (-1 - -3)] --->> Output: 2


//function sumOfDifferences(arr) {
    //sort array in decending order
    //group array into pairs
//}

const sumOfDifferences = arr => arr.length > 1 ? arr.sort((el,el2) => el2 - el).map((x,i) => (x -= arr[i+1]) || 0).reduce((acc,e) => +acc + (e || 0)) : 0

//*****I was able to get this kata fairly easily. I wrote it as an arrow function, but this could be better served as a block. I also refreshed my understanding of sort. I was thinking that it produced a new array, but it modifies the existing array. 
