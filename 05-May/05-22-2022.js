//P: input will be a string and an integer. No parameters for an empty string nor integer
//R: return should be an array of integers added with the corresponding digit of the key
//E: Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
  // Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]

//function encode(str,  n){
    //turn the string into an array
    //change the string into digits
    //spread the key across the length of the array and add each digit
    //return the updated array    
//}

function encode(str,n){
    n = Array.from({length: String(n).length}, (_,i) => +String(n)[i])
    return str.split('').map((x,i) => (x.charCodeAt()-96 + (n[i%n.length])))
}

//*****I was able to get this kata and the code above was refactored a bit from the pseudocode I wrote. I am really proud of this as I was able to fully grasp PREP on this one. 