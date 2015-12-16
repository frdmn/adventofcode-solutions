/* Puzzle input - check /input/day6.js */
var input = require('./input/day6.js');

/* Variables and constants */

var totalOn = [],
    totalOff = [];

const XLENGTH = 999,
      YLENGTH = 999;

var totalInstructions = input.split('\n');

/* Functions */

function toggleCoordinateRange(coordinates, from, to, state) {
  var startX = from.split(',')[0],
      endX = to.split(',')[0],
      startY = from.split(',')[1],
      endY = to.split(',')[1];

  for (var startX = 0; startX <= endX; startX++) {
    for (var startY = 0; startY <= endY; startY++) {
      var currentState = coordinates[startX + ',' + startY];

      if (state === 'toggle') {
        if (currentState === 'on') {
          var newState = 'off';
        } else {
          var newState = 'on';
        }
      } else {
        var newState = state;
      }
      coordinates[startX + ',' + startY] = newState;
    }
  }
}

/* Logic */

// Generate initial coordinate grid to store states of each light
var coordStates = {};
for (var iX = 0; iX <= XLENGTH; iX++) {
  for (var iY = 0; iY <= YLENGTH; iY++) {
    coordStates[iX + ',' + iY] = 'off';
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
  toggleCoordinateRange(coordStates, partFrom, partTo, partState);
}

// Iterate over each coordinate state and push into on/off array
for (var coordinates in coordStates) {
  if (coordStates.hasOwnProperty(coordinates)) {
    var state = coordStates[coordinates];
    if (state === 'off') {
      totalOff.push(coordinates);
    } else {
      totalOn.push(coordinates);
    }
  }
}

// Output total amount of on and off states
// console.log(coordStates);
console.log(totalOff.length);
console.log(totalOn.length);
