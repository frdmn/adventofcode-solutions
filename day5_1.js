/* Puzzle input - check /input/day5.js */
var input = require('./input/day5.js');

/* Variables */
// Split input by new line character ("\n")
var strings = input.split('\n');

/* Functions */

// Function to return the vowel count
function getVowelCount(string){
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    var character = string[i];
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
      count++;
    }
  }
  return count;
}

var niceStrings = strings;

// For each gift in puzzle input
for (var i = 0; i < strings.length; i++) {
  // Split each dimension line in each parts (width, heigth, length)
  var currentString = strings[i];

  // Check if currentString has at least three vowels
  if (getVowelCount(currentString) < 3) {
    niceStrings.splice(niceStrings.indexOf(currentString), 1);
  }
};

console.log(niceStrings);
