// DESCRIPTION:
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

//P: input will be two strings
//R: output should be a boolean of whether the first and last letters of both inputs are the same
//E: feast('chickadee', 'chocolate cake') => true
  // feast('brown bear', 'bear claw') => false
  // feast('great blue heron', 'garlic naan') => true

const feast = (beast, dish) => {
    //find the first letter of each string (beast[0], dish[0])
    //find the last letter of each string (beast.slice(-1), dish.slice(-1))
    //set up validation for both (&&)
    //return results
    return beast[0] == dish[0] && beast.slice(-1) == dish.slice(-1)
}

// OR

const feast2 = (beast, dish) => dish.startsWith(beast[0]) && dish.endsWith(beast.slice(-1))


//===========================================================================================================//