//P: Input will be 3 integers: P-Principal, r-Interest Rate, and n - number of time periods.
    //P will always be an integer between 0 and 9999
    //r will be a decimal between 0 and 1
    //n will be an integer between 0 and 50
//R: return will be an array [simple interest, compound interest]
//E: interest(100, 0.1,  1)  -->>  [110, 110]
  // interest(100, 0.1,  2)  -->>  [120, 121]
  // interest(100, 0.1, 10)  -->>  [200, 259]

function interest(P,r,n) {
    let simple = P + (n*P*r)
    let compound = P
    for (let i = n; i > 0; i--){
      compound += (compound*r)
    }
    return [Math.round(simple), Math.round(compound)]
  }

//*****I completed this without setting up the PREP method due to the details included in the KATA challenge. Looking over the solutions, i found a way to refactor the code as below:

const interest2 = (P,r,n) => [Math.round(P+(n*P*r)), Math.round(P*((1+r)**n))]

//*****I am very happy with this refactored code :D
