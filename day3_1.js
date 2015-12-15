/* Puzzle input - check /input/day3.js */
var input = require('./input/day3.js');

/* Variables */
var santasVisits = [ [ 0, 0 ] ],
    coordX = 0,
    coordY = 0;

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
  var nextDirection = input[i];

  // Adjust coordinates on X and Y axis acoording to the direction characters
  if (nextDirection === '>') {
    // to east => X axis + 1
    coordX++;
  } else if (nextDirection === '<') {
    // to west => X axis - 1
    coordX--;
  } else if (nextDirection === '^') {
    // to north => Y axis + 1
    coordY++;
  } else if (nextDirection === 'v') {
    // to south => Y axis - 1
    coordY--;
  }

  // Store coordination pair
  var currentLocation = [coordX, coordY];
  // ... and push to santasVisits array
  santasVisits.push(currentLocation);
};

// Call unique() function to sort out duplicate visits
console.log(unique(santasVisits).length);
