// DESCRIPTION:
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)


const nearestSq = n => Math.round(n ** (1/2)) ** 2

//*****I struggled with this only a bit. I initially struggled with finding how to find the nearest square, but if we square the initial number, round it, then square that number, it would be the nearest square. 