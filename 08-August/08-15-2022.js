// DESCRIPTION:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

//P: input will be two strings (name, owner)
//R: output should be a personalized message if name is the same as owner return 'Hello boss', otherwise return 'Hello guest'
//E: greet('Harvey', 'Harvey') => 'Hello boss'
  // greet('Harvey', 'Leon') => 'Hello guest'
//Questions: If both entries are the same name, will they be listed the same (capitalization)? Will there be any other data types passed in as arguments?

const greet = (name, owner) => {
    //give all arguments the same syntax (name.toLowerCase()) (owner.toLowerCase())
    //determine if name and owner are the same (name === owner)
    //return appropriate greeting
    return `Hello ${name.toLowerCase() === owner.toLowerCase() ? 'boss' : 'guest'}`
}