// You are trying to choose a new hobby, and part of your decision is based on how much each hobby would cost to get started. So, you've brainstormed a list of the things you would need to buy for each one, and the cost of each item. But, they're all mixed together, and what you really need is the total cost added up for each hobby. Write a function that accepts a nested array containing hobby name, item name, and item cost, and returns an object containing the total cost for each hobby. Here's some sample input and output.

// Sample input:
// [
//   ["knitting", "needles", 10],
//   ["lock picking", "picks", 25],
//   ["knitting", "yarn", 30],
//   ["DJing", "two turntables", 500],
//   ["knitting", "sock pattern", 3],
//   ["DJing", "a microphone", 35]
// ]

// Sample output:
// {
//   "knitting": 43,
//   "lock picking": 25,
//   "DJing": 535,
// }

//P: input will be a nested array. each array will contain 3 values (hobby, item, cost)
//R: output should be an object with {key(hobby): value(totalCost)}
//E: hobby([
//   ["knitting", "needles", 10],
//   ["lock picking", "picks", 25],
//   ["knitting", "yarn", 30],
//   ["DJing", "two turntables", 500],
//   ["knitting", "sock pattern", 3],
//   ["DJing", "a microphone", 35]
// ]) => {
//   "knitting": 43,
//   "lock picking": 25,
//   "DJing": 535,
// }

  // hobby([['gaming', 'controller', 50],
          //['sewing', 'sewing machine', 100],
          //['rafting', 'raft', 250]]) =>
// //{
//     'gaming': 50,
//     'sewing': 100,
//     'rafting': 250
//}

const hobby = hobbylist => {
    // reduce array list to being an object with a key value pair 
    return hobbylist.reduce((acc, hobby) => {
        acc[hobby[0]] = (acc[hobby[0]] || 0) + hobby[2]
        return acc
    }, {})
}