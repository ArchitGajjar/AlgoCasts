// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

console.log("Hello world");

function anagrams(stringA, stringB) {
  const stringA_Map = {};
  const stringB_Map = {};

  if (stringA.length !== stringB.length) {
    return false;
  }

  for (let char of stringA) {
    if(stringA_Map[char]) {
      stringA_Map[char] = stringA_Map[char] + 1
    } else {
      stringA_Map[char] = 1;
    }
  }

  for (let char of stringB) {
    if(stringB_Map[char]) {
      stringB_Map[char] = stringB_Map[char] + 1
    } else {
      stringB_Map[char] = 1;
    }
  }
  
  console.log( 'string A mapping - ', stringA_Map);
  console.log( 'string B mapping - ', stringB_Map);
}

anagrams('rail safety', 'fairy tales')
module.exports = anagrams;
