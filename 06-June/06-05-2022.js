// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).

const billboard = (name, price = 30) => Array.from(name, x => price).reduce((acc,el) => acc + el, 0)

//*****This kata was easy to get. I spent a bit of time tweaking it to refactor it, but to refactor my code further: 

const billboard2 = (name, price = 30) => [...name].reduce(x => x + price, 0)