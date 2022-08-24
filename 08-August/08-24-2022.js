// DESCRIPTION:
// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

//P: input will be a string. The string represents the animal encountered by the frog
//R: output should be a string (either wide or small) depending on the animal encountered
//E: mouthSize('boar') => 'wide'
  // mouthSize('aLliGaTor') => 'small'
  // mouthSize('alligator') => 'small'
  // mouthSize('frog') => 'wide'
  // mouthSize('fRoG') => 'wide'

const mouthSize = animal => {
    // make all letters in parameter lowercase (animal.toLowerCase())
    // compare to condition (== 'alligator')
    // determine outcome with conditional statement (? small : wide)
    // return the results
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
}

//=============================================================================================================
