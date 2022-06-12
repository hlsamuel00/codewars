// I don't like writing classes like this:

// function Animal(name,species,age,health,weight,color) {
//   this.name = name;
//   this.species = species;
//   this.age = age;
//   this.health = health;
//   this.weight = weight;
//   this.color = color;
// }
// Give me the power to create a similar class like this:

// const Animal = makeClass("name","species","age","health","weight","color") 



function makeClass(...keys){
    return class {
        constructor(...values){
            keys.forEach((val, idx) => this[val] = values[idx]);
        }
    }
}

//*****I wasn't able to get this kata the first time, but looking through the solutions, I was able to break down how the class was created. 


//=============================================================================================================