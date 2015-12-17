/* Puzzle input - check /input/day6.js */
var input = require('./input/day6.js');

/* Variables and constants */

var totalOn = [],
    totalOff = [];

const XLENGTH = 999,
      YLENGTH = 999;

var totalInstructions = input.split('\n');

/* Functions */

// Function that takes the coordination array, start and end points as well as the state as arguments
// and sets the appropriate lights in our two dimensional coordination grid
function executeInstructions(coordinates, from, to, state) {
  var startX = from.split(',')[0],
      endX = to.split(',')[0],
      startY = from.split(',')[1],
      endY = to.split(',')[1];

  for (var iX = startX; iX <= endX; iX++) {
    for (var iY = startY; iY <= endY; iY++) {
      var currentState = coordinates[iX][iY];

      if (state === 'toggle') {
        if (currentState === true) {
          var newState = false;
        } else {
          var newState = true;
        }
      } else if(state === 'on') {
        var newState = true;
      } else if(state === 'off') {
        var newState = false;
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
    coordStates[iX][iY] = false;
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
    if (state === false) {
      totalOff.push(iX + ',' + iY);
    } else {
      totalOn.push(iX + ',' + iY);
    }
  }
}

// Output total amount of on and off states
// console.log(coordStates);
console.log('lights on: ' + totalOn.length);
console.log('lights off: ' + totalOff.length);
