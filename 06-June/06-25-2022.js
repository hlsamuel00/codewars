// The year is 2088 and the Radical Marxist Socialist People's Party (RMSPP) has just seized power in Brazil.

// Their first act in power is absolute wealth equality through coercive redistribution.

// Create a function that redistributes all wealth equally among all citizens.

// Wealth is represented as an array/list where every index is the wealth of a single citizen. The function should mutate the input such that every index has the same amount of wealth. MUTATE the input array/list, don't return anything.

// See example:

// wealth = [5, 10, 6]  # This represents:
//                      # citizen 1 has wealth 5
//                      # citizen 2 has wealth 10
//                      # citizen 3 has wealth 6
                     
// redistribute_wealth(wealth) # mutates wealth list
// wealth => [7, 7, 7] # wealth has now been equally redistributed
// Info:

// MUTATE the input array/list, don't return anything

// Input is guaranteed to hold at least 1 or more citizens

// Wealth of citizen will an integer with minimum 0 (negative wealth not possible)

// Handling of floating point error will not be tested

function redistributeWealth(wealth) {
    const avg = (wealth.reduce((acc,el) => acc + el, 0)) / wealth.length
    wealth.forEach((_,i,arr) => arr[i] = avg)
}


//*****I was able to get this kata and review of the MDN allowed me to understand how to mutate an existing array without creating a new array. 