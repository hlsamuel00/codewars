//input will be 3 integers >= 0
//return: if clothes is more than 2x load - too much clothes
        //if clothes is less than load - not enough clothes
        //should return a number to two decimal points

// howMuchWater(10,10,21) //Output: too much clothes
// howMuchWater(10,10,2)  //Output: Not enough clothes
// howMuchWater(10,11,20) //Output: 23.58
// howMuchWater(50,15,29) //Output: 189.87

function howMuchWater(water, load, clothes){
    if (clothes > load*2){return 'Too much clothes'}
    if (clothes < load){return 'Not enough clothes'}
    else {return +(water * 1.1 ** (clothes - load)).toFixed(2)}
}


//*****I was able to get this kata challenge, but I need to work a bit more on my pseudo-code. I did a lot of trial and error and should really work on working through the trials out loud. 


//=============================================================================================================