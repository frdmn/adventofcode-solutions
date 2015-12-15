/* Puzzle input - check /input/day3.js */
var input = require('./input/day3.js');

/* Variables */
var santa = {
      visits: ['0,0'],
      coordX: 0,
      coordY: 0
    },
    robo = {
      visits: ['0,0'],
      coordX: 0,
      coordY: 0
    };

// Function to uniquify an array
function unique(array){
  var uniqueArray = [];

  for (var i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray;
}

// For each character in puzzle input
for (var i = 0; i < input.length; i++) {
  var nextDirection = input[i],
      deliverer;

  // Find out whose turn it is, either santa's or robo's
  if (i % 2) {
    deliverer = santa;
  } else {
    deliverer = robo;
  }

  // // Adjust coordinates on X and Y axis acoording to the direction characters
  if (nextDirection === '>') {
    // to east => X axis + 1
    deliverer.coordX++;
  } else if (nextDirection === '<') {
    // to west => X axis - 1
    deliverer.coordX--;
  } else if (nextDirection === '^') {
    // to north => Y axis + 1
    deliverer.coordY++;
  } else if (nextDirection === 'v') {
    // to south => Y axis - 1
    deliverer.coordY--;
  }

  // Push current location coordinates to deliverer's visits array
  deliverer.visits.push(deliverer.coordX + ',' + deliverer.coordY);
};

// Combine santa's and robo's visits
var totalVisits = santa.visits.concat(robo.visits);

// Call unique() function to sort out duplicate visits
console.log(unique(totalVisits).length);
// => 2631
