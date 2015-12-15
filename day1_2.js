/* Puzzle input - check /input/day1.js */
var input = require('./input/day1.js');

/* Variables */
var currentFloor = 0,
    basementLevel;

// For each character in puzzle input
for (var i = 0; i < input.length; i++) {
  // Store current "stair"
  var stair = input[i];
  // If it's an ascending stair ...
  if (stair === '(') {
    // ... add 1 to currentFloor
    currentFloor++;
  // If it's a descending one ...
  }else if(stair === ')'){
    // ... substract 1 from currentFloor
    currentFloor--;
  }

  // If current floor equals "-1" (our basement)
  if (currentFloor === -1) {
    basementLevel = i+1;
    // Break and interrupt if(), so we don't override the position by accident because there is an additional occurance of the basement floor
    break;
  }
};

console.log(basementLevel);
// => 1783
