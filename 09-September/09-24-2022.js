// DESCRIPTION:
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
    const getVolume = (l,w,h) => l * w * h
    const getArea = (l,w,h) => 2 * (l * w + l * h + w * h)
    return [getArea(depth, width, height), getVolume(depth, width, height)]
}