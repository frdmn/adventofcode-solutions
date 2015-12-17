/* Puzzle input - check /input/day6.js */
var input = require('./input/day6.js');

/* Variables and constants */

var totalBrightness = 0;

const XLENGTH = 999,
      YLENGTH = 999;

var totalInstructions = input.split('\n');

/* Functions */

// Function that takes the coordination array, start and end points as well as the state as arguments
// and sets the appropriate lights in our two dimensional coordination grid
function executeInstructions(coordinates, from, to, state) {
  var startX = +from.split(',')[0],
      endX = +to.split(',')[0],
      startY = +from.split(',')[1],
      endY = +to.split(',')[1];

  for (var iX = startX; iX <= endX; iX++) {
    for (var iY = startY; iY <= endY; iY++) {
      var currentState = coordinates[iX][iY];

      if (state === 'toggle') {
        var newState = currentState + 2;
      } else if(state === 'on') {
        var newState = currentState + 1;
      } else if(state === 'off') {
        var newState = currentState - 1;
        if (newState < 0) {newState = 0}
      }
      coordinates[iX][iY] = newState;
    }
  }
}

/* Logic */

// Generate initial coordinate grid to store states of each light
var coordStates = [];
for (var iX = 0; iX <= XLENGTH; iX++) {
  coordStates[iX] = []
  for (var iY = 0; iY <= YLENGTH; iY++) {
    coordStates[iX][iY] = 0;
  }
}

// Obey all instructions
for (var i = 0; i < totalInstructions.length; i++) {
  var instructionString = totalInstructions[i],
      instructionParts = instructionString.split(' ');

  // Check for 'toggle' state
  if (instructionString.match(/toggle/g)) {
    var partState = instructionParts[0];
  } else {
    var partState = instructionParts[1];
    instructionParts.shift();
  }

  // Assign 'state', 'from' and 'to'
  var partState = instructionParts[0],
      partFrom = instructionParts[1],
      partTo = instructionParts[3];

  // Call function to to set appropriate light grid
  executeInstructions(coordStates, partFrom, partTo, partState);
}

// Iterate over each coordinate state and push into on/off array
for (var iX = 0; iX < coordStates.length; iX++) {
  for (var iY = 0; iY < coordStates[iX].length; iY++) {
    var state = coordStates[iX][iY];
    totalBrightness = totalBrightness + state;
  }
}

// Output total amount of on and off states
console.log(totalBrightness);
// => 17836115
