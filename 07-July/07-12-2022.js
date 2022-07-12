// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.


String.prototype.digit = function() {
    return this.length == 1 ? Boolean(!this.search(/\d/g)) : false
  }

//*****I was able to get this with a bit of difficulty, but looking through the solutions i found a way to refactor the code:

String.prototype.digit = function() {
    return /^\d$/.test(this);
  };


//*****I don't fully understand the breakdown of how it works, but it's much more refined than the one I wrote. 