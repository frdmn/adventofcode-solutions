/* Puzzle input - check /input/day4.js */
var input = require('./input/day4.js'),
    md5 = require('md5');

// As long as i is bigger than 0 (ಠ_ಠ)
for (var i = 1; i > 0; i++) {
  var hash = md5(input + i);
  console.log(hash);
  if (hash.substr(0, 5) === '00000') {
    console.log(i);
    // => 282749
    break;
  };
};
