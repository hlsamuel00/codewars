// The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

// In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

// You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

// PT92 - 17 bullets
// M4A1 - 30 bullets
// M16A2 - 30 bullets
// PSG1 - 5 bullets

// Example:

// ["PT92", 6] => 2 (6 streets 3 bullets each)
// ["M4A1", 6] => 1

// The return Will always be an integer so as the params.

function magNumber(info){
    const dict = new Map([
      ["PT92", 17],
      ["M4A1", 30],
      ["M16A2", 30],
      ["PSG1", 5]
    ]);
    return Math.ceil(info[1] * 3 / dict.get(info[0]));
  }
//*****I wasn't able to get this kata. The solution above was using the map object that i was attempting to use in my solution. I want to review this kata later to determine if i'm able to further understand it as i progress. I have starred the kata. 


//=============================================================================================================


// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - sonYearsOld * 2)

//*****Working through the math of this was the tricky part, but i was able to get it figured out!!


//=============================================================================================================


// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

const hero = (bullets, dragons) => dragons * 2 <= bullets

//*****This kata was very easy to complete. 


//=============================================================================================================


// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

const squareSum = numbers => numbers.reduce((acc,x) => acc += x**2,0)

//*****I was able to complete this kata on the FIRST TRY!! knowing how to manipulate arrays is working out well for completing these kata challenges!!


//=============================================================================================================


// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

const bmi = (weight, height) => {
    let bMi = weight / height**2
    return bMi <= 18.5 ? 'Underweight' : bMi <= 25 ? 'Normal' : bMi <= 30 ? 'Overweight' : 'Obese'
  }

//*****This kata was easy to do. I challenged myself to use an arrow function and ternary operators for the if conditional. 