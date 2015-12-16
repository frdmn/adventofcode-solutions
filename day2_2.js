/* Puzzle input - check /input/day2.js */
var input = require('./input/day2.js');

/* Variables */
// Split input by new line character ("\n")
var giftDimensions = input.split('\n'),
    smallestArea = 100000, // make sure this is ... huge?
    totalRibbon = 0;

// For each character in puzzle input
for (var i = 0; i < giftDimensions.length; i++) {
  // Split each dimension line in each parts (width, heigth, length)
  var currentDimension = giftDimensions[i],
      dimensionParts = currentDimension.split('x');

  // Store w, h and l in variables
  var length = dimensionParts[0],
      heigth = dimensionParts[1],
      width = dimensionParts[2];

  // Find smallest area
  if ((length * width) < smallestArea) {
    smallestArea = length * width;
    x = length;
    y = width;
  }

  if ((width * heigth) < smallestArea) {
    smallestArea = width * heigth;
    x = width;
    y = heigth;
  }

  if ((heigth * length) < smallestArea) {
    smallestArea = heigth * length;
    x = heigth;
    y = length;
  }

  // Find the amount of ribbon needed for the current gift
  var ribbonNeeded = +x + +x + +y + +y;

  // Find ribbon bow (equals total gift volume)
  var ribbonBow = length * heigth * width;

  // Calculate total ribbon
  var totalRibbon = totalRibbon + ribbonNeeded + ribbonBow;
};

console.log(totalRibbon);
// => 3737498
