// Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
// Ex. (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

let min = function(list){
    let minimumV = list[0];
    list.forEach(element => {
          if(element < minimumV){
               minimumV = element;
          } else {
               return minimumV
         }
    })
      return minimumV;
  }
  
  let max = function(list){
    let maximumV = list[0];
    list.forEach(element => {
        if (element > maximumV){
          maximumV = element;
        } else {
            return maximumV
        }
    })  
      return maximumV;
  }
//*****I struggled a bit with this code, but I had a LOVELY coding partner :D. Putting together the pseudo code really helped outline what i needed to do and building each part of it helped structure the whole thing cohesively.