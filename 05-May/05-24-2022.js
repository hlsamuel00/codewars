//P: input will be an array of even size of positive integers.
//R: return should be an integer of the minimum sum which is obtained from summing each Two integers product
//E: minSum({12,6,10,26,3,24}) ==> return (342)
//   minSum({9,2,8,7,5,4,0,6}) ==> return (74)

function minSum(arr) {
    let newarr = []
    arr.sort((el,el2) => el2-el)
    for (let i = 0; i < arr.length**(arr.length**2); i++){
     newarr.push(arr.pop() * arr.shift())
    }
    return newarr.reduce((acc,el) => acc + el, 0)
  }

//*****I wasn't able to get this kata on my own; I was able to get it to pass the standard test, but not the random tests. In looking at the solutions I refactored the code above:

const minSum2 = arr => arr.sort((el,el2) => el2-el).reduce((acc,x,_,a) => acc + x * a.pop(),0)

//*****I am so proud of how close i was to figure this out!!