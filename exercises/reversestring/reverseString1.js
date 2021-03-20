// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = (str) => {
  let reverseString = '';

  for(let char of str) {
    reverseString = char + reverseString;
  }
  return reverseString;
}

const reverseString = reverse('Hello World!');
console.log('Reverse String value is : ', reverseString);

module.exports = reverse;
