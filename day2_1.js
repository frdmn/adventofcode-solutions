/* Puzzle input - check /input/day2.js */
var input = require('./input/day2.js');

/* Variables */
// Split input by new line character ("\n")
var giftDimensions = input.split('\n'),
    totalPaper = 0;

// For each character in puzzle input
for (var i = 0; i < giftDimensions.length; i++) {
  // Split each dimension line in each parts (width, heigth, length)
  var currentDimension = giftDimensions[i],
      dimensionParts = currentDimension.split('x'),
      smallestArea = 0;

  // Store w, h and l in variables
  var length = dimensionParts[0],
      heigth = dimensionParts[1],
      width = dimensionParts[2];

  // Find smallest area
  smallestArea = Math.min(length * width, width * heigth, heigth * length);

  // Calculate total paper per gift (including slack/smallestArea)
  var paperNeeded = (2 * length * width) + (2 * width * heigth) + (2 * heigth * length) + smallestArea;

  // console.log( '(2 * ' + length + ' * ' + width + ') + (2 * ' + width + ' * ' + heigth + ') + (2 * ' + heigth + ' * ' + length + ') = ' + (smallest = ' + smallestArea + ')');
  // => (2 * 29 * 26) + (2 * 26 * 13) + (2 * 13 * 29) = 2938 + (smallest = 338)

  // Add to totalPaper variable
  totalPaper = totalPaper + paperNeeded;
};

console.log(totalPaper);
// => 1586300
