// DESCRIPTION:
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

// input will be two integers
// output will be a single integer of the remaining health or 0
// Example: combat(100, 30) => 70
        //  combat(95, 5) =>
        //  combat(30, 45) => 0

const combat = (health, damage, remainingHealth = health - damage) => {
    // determine the amount of health left (health - damaged)
    // determine if the health is less than 0 ( remaining < 0 ?)
    // if so, return 0, if not, return remaining health (0 : remainingHealth)
    // return the result
    return remainingHealth < 0 ? 0 : remainingHealth
}

// OR

const combat = (health,damage) => Math.max(0, health - damage)