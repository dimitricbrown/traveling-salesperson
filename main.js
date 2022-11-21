// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [20, 50, 10, 5, 7, 100]

// Declare a variable to store the total. Initial value is 0.

let totalMiles = 0

/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (const miles of weeklyMiles) {
    totalMiles += miles
}

// Declare a new variable to store the average miles over time

const averageMiles = totalMiles / weeklyMiles.length

// Output the average miles and the total miles to the console
console.log(`On a average, I get about ${averageMiles} travel miles in. In total over a month, it is ${totalMiles}!`)