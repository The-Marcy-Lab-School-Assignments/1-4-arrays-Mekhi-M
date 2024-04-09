/* eslint-disable no-param-reassign */
const clearArr = (arr) =>
  arr.splice(0);

//tests

// let testArray11 = ['looooool', 'lol']
// clearArr(testArray11);
// console.log(testArray11)

const getFirstItem = (array) =>
  array[0];

// tests

let testArray12 = ['looooool', 'lol']
console.log(getFirstItem(testArray12));
console.log(testArray12)

module.exports = {
  clearArr,
  getFirstItem,
};
