// The story of the famous Disney-Pixar animated movie "Up" is based on the main character Carl Fredricksen journey in his home equipped with balloons.

// But can this happen for real? What kind of objects can you lift with helium balloons? How many balloons do you need?

// In this kata you will create a class

// Journey(object, crew, balloons)

// so anyone can create objects like

// var gravityFalls = new Journey(house, 2, 20622)

// which means starting a new journey to Gravity Falls in a house with 2 members of crew (Carl and Russel).

// But is this journey possible? Will the house float? Is it enough to have 20622 helium balloons (the number used by Pixar animators in liftoff scene)?

// Your Journey class should have a public method isPossible() that returns true or false based on these rules:

// 1). Every object passed to Journey will have its weight property like

// var house = {"weight": 45000};

// (we will use metric system in this kata, 45 000 kg is about 100 000 pounds).

// 2). Each member of the crew weighs 80 kg.

// 3). We use regular sized party balloons filled with helium. Each balloon lifts 4.8 grams + its own weight.

// Can you lift a tiny 95 kg(~200 pound) push cart with 50 balloons like in one of the starting scenes of the movie?

// Can one balloon actually carry a message on a single letter-sized paper sheet sent by Carl to his dying wife Ellie in the other scene?

// Can the story I heard about man flying in his lawn chair equipped with 1000 balloons be true?

// Your coding mastery will reveal answers to these and many other important questions in the tests. Let the journey begin!

//P: input will be an object with a weight property in kg, and 2 integers representing the number of people and number of ballons
//R: return should be a boolean (true or false) of whether the object can float. the return will be called as a method to the Journey class
//E: let couch = {weight: 5}
  // let couchHarvey = new Journey(couch,1,100)
  // console.log(couchHarvey.isPossible()) => false
//Questions: Will the weight the balloons can lift ever change? Will the weight of the crew change? 

class Journey{
    //create a constructor that creates a journey with an input for the object, crew, and number of balloons
    constructor(object, crew, balloons){
        //create a total weight of everything
        this.weight = object.weight + (crew * 80) //weight is a property of the object and the crew each weights 80kg
        this.float = balloons * .0048 //the weight the balloons can cary is in grams, by dividing the 4.8 by 1000 we get .0048 kg which is the weight each balloon can lift
    }
    isPossible(){
        return this.weight <= this.float //if the weight is less than or equal to the float, the journey should be a success. This method will return a boolean value of true or false to the comparison statement listed
    }
}
//*****I made this class simply due to the lack of additional details needed. A revision to make would be to determine if the crew and ballons could change, if so, we could build out functionality to calculate the lift/float from that and also include more details with the crews weight. 