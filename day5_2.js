/* Puzzle input - check /input/day5.js */
var input = require('./input/day5.js');

/* Variables */
// Split input by new line character ("\n")
var strings = input.split('\n');

/* Functions */

// Function to check a string for duplicate occurances of one of it's letters in pairs
function checkDuplicateLetterPairs(string){
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (string.match(/(..).*\1/)) {
      return true;
    }
  }
  return false;
}

// Function to check if a string contains at least one letter which repeats with exactly one letter between them
function checkSpacedLetterPattern(string){
  for (var i = 0; i < string.length; i++) {
    var letter = string[i];
    if (string.match(/(.).\1/)) {
      return true;
    }
  }
  return false;
}

var niceStrings = JSON.parse(JSON.stringify(strings));

// For each gift in puzzle input
for (var i = 0; i < strings.length; i++) {
  // Split each dimension line in each parts (width, heigth, length)
  var currentString = strings[i];

  // Check if there are any duplicate letters
  if (!checkDuplicateLetterPairs(currentString)) {
    niceStrings.splice(niceStrings.indexOf(currentString), 1);
  // ... or if string doesn't contain 'ab', 'cd', 'pq' or 'xy'
  } else if (!checkSpacedLetterPattern(currentString)) {
    niceStrings.splice(niceStrings.indexOf(currentString), 1);
  }
}

console.log(niceStrings.length);
// => 69
