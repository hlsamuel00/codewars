// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(num_pill, dist, width) {
    let distanceBetween = 0;
    if (num_pill === 1){
      distanceBetween = 0
    } else {
    distanceBetween = ((dist * 100) * (num_pill - 1)) + (width * (num_pill - 2))
    }
    return distanceBetween
  }
//*****I'm extremely proud of myself for figuring out the majority of the problem. I was forgetting the width of the pillars being factored into it and threw off my calculations for num_pill's higher than 2. a quick google search and figuring out helped me piece it together. 