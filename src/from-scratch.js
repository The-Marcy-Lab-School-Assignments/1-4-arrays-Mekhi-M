const addToFrontOrBack = (arr, value, isFront) =>
  // if (isFront) {
  //   arr.unshift(value);
  // } else {
  //   arr.push(value);
  // }
  // return;
  isFront ? arr.unshift(value) : arr.push(value);

//tests 

// let testArray1 = [ 6, 7, '8!'];
// addToFrontOrBack(testArray1, 5, true);
// addToFrontOrBack(testArray1, 'Who do we appreciate?', false);
// console.log(testArray1);

const reverseString = (string) => 
  string.split('').reverse().join('');

// tests

// console.log(reverseString('yo yo yo'))

const newArrayFullOf = (value, numOfValue) => 
  new Array(numOfValue).fill(value);

// tests

// console.log(newArrayFullOf('poop', 6))

const insertIntoMiddle = (arr, value) => 
  arr.splice(Math.floor(arr.length / 2), 0, value);

// tests

// let testArray4 = [1, 2, 4, 5, 6]
// insertIntoMiddle(testArray4, 3);
// console.log(testArray4);

const deleteFromMiddle = (arr) => 
  arr.splice(Math.floor(arr.length / 2), 1);

//tests

// let testArray5 = [1, 2, 3, 4, 5]
// deleteFromMiddle(testArray5);
// console.log(testArray5)

const isRightIndex = (arr, value, index) => 
  arr.at(index) === value;

// tests

// let testArray6 = [2, 4, 6, 8]
// console.log(isRightIndex(testArray6, "yea", 3))

const roundAllNumsDown = (arr) => 
  arr.map((x) => Math.floor(x));

// tests

// let testArray7 = [1.1, 3.3, 5.5, 7.7, 9.9];
// console.log(roundAllNumsDown(testArray7));
// console.log(testArray7)

const getAllYCoordinates = (arrOfCoords) => 
  arrOfCoords.map((x) => x[1]);

// trying to figure out how to do it in one line
// {
//   let yCoords = [];
//   {
//     for (let coordinate of arrOfCoords) {
//       yCoords.push(coordinate[1]);
//     }
//   }

//   return yCoords;

//   return arrOfCoords.map((x) => x[1]);

// };
  

// tests

// let testArray8 = [[1, 2], [3, 4], [5, 6]];
// console.log(getAllYCoordinates(testArray8));
// console.log(testArray8)

// let testArray8two = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(getAllYCoordinates(testArray8two));
// console.log(testArray8two)

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
