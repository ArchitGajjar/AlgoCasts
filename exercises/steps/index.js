// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const steps = (n) => {
  /**
   * input : consider n value 3.
   * [00, 01, 02]
   * [10, 11, 12] 
   * [20, 21, 22]
   * 
   * output 
   * [#, 0, 0]
   * [#, #, 0]
   * [#, #, #]
  */

  for (let row = 0 ; row < n; row++) {
    let rowString = '';
    for(let col =0; col < n ; col++){
      if (col <= row) {
        rowString = rowString + '#';
      } else {
        rowString = rowString + ' ';
      }
    }
    console.log(rowString);
  }
}

steps(10);
module.exports = steps;
