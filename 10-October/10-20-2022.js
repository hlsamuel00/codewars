// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// input will be an array of names
// output should be the array filtered with names 4 characters long
// examples: friend(["Ryan", "Kieran", "Jason", "Yous"]) => ["Ryan", "Mark"]
          // friend(["Ryan", "Kieran", "Mark"]) => ["Ryan", "Mark"]

const friend = (friendList) => {
    // filter friends list based on length of name (friendsList.filter(name => name.length == 4))
    // return the result
    return friendList.filter(name => name.length == 4)
}