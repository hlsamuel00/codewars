//Complete the function which converts a binary number (given as a string) to a decimal number.

const binToDec = bin => parseInt(bin,2)

//*****I was able to get this kata very easily. i did a quick google search to understand how to convert binary, and found that it was a base 2 radix. I recalled the parseInt() method allowing for a radix to be entered and determined that it would convert it for me. I also wanted to cover edge cases and came up with the following code:
    const binTODec = bin => !bin.split('').includes(/[2-9]/g) ? parseInt(bin,2) : 'Invalid Entry'
