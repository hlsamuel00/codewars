// DESCRIPTION:
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

//P: input will be an integer and a boolean
//R: output should be a string with "£" prefix and the salary multipled by 10 if the bonus is a truthy and just the salary if the bonus is a falsy
//E: bonusTime(1000, true) => "£10000"
  // bonusTime(1000, false) => "£1000"
//Questions: Will the bonus always be provided? Will the salary always be a string type? 

const bonusTime = (salary, bonus) => {
    //determine if bonus is a truthy
    //set up conditional to multiply by 10 if bonus is true or 1 if bonus is false
    `\u00A3${salary * (bonus ? 10 : 1)}`
}