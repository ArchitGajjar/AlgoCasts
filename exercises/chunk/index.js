// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const chunk = (array, size) => {
  const finalResults = [];
  const chunks = [];
  let index = 0;

  // [0,1,2,3,4] = length 5
  // index = 0,1,2,3,4
  while (index < array.length) {
    finalResults.push(array.slice(index, index + size));
    index += size
  }

  return finalResults;
}

const results = chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log('Results : ', results);
module.exports = chunk;
