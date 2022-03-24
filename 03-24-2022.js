// Implement a function which multiplies two numbers.

let multiply = (a,b) => a * b;

//*****This was simple, but it took me a minute to figure out because it wasn't noticing the Kata was requesting that the function be named 'multiply'.


//=============================================================================================================


// Will you make it?
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= mpg * fuelLeft ? true : false;

function zeroFuel (distanceToPump, mpg, fuelLeft){
    if (distanceToPump <= mpg * fuelLeft){
        return true
    }
}
//*****I was able to write out this function relatively easily. I initially wrote it as an arrow function, but decided to go back and write it as a block function as well. This repetition helps me understand the syntax needed for writing functions/methods very well :D I'm truly recognizing my progress with this. 


//=============================================================================================================


// The aspect ratio of an image describes the proportional relationship between its width and its height. Most video shown on the internet uses a 16:9 aspect ratio, which means that for every pixel in the Y, there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9). As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920, however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.
// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.
// This kata is part of a series with Aspect Ratio Cropping - Part 2 .
// Ex:
    // 374 × 280 pixel image with a 4:3 aspect ratio.

function aspectRatio(x,y){
    let newX = Math.ceil(y * (16/9));
    let arr = [newX, y]
    return arr;
}
//*****I was able to get this done relatively easily, but struggled getting it to round up. A quick google search on how to round up using Math.ceil() helped resolve this. I love figuring these problems out!!


//=============================================================================================================


