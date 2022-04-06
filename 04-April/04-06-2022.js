// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => month < 4 && month > 0 ? 1 : month < 7 ? 2 : month < 10 ? 3 : month < 13 ? 4 : 'Invalid Input'

//*****I was able to complete this kata with ease and decided on ternary operators. I initially didn't include an option for external parameters. I refactored the code to include an error message.