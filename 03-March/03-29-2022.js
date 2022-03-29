// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Ex:
//     * With `name` = "john"  => return "Hello, John!"
//     * With `name` = "aliCE" => return "Hello, Alice!"
//     * With `name` not given 
//       or `name` = ""        => return "Hello, World!"

const  hello = name => {
    if (name == undefined || name == ""){
      return `Hello, World!`
    } else {
      name = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)
      return `Hello, ${name}!`
    }
  }

//*****I was able to get this figured out by using google to combine strings and combining methods. This was a solid challenge.


//=============================================================================================================


