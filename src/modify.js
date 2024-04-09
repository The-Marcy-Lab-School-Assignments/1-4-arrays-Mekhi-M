const uppercaseAll = (...wordArgs) => 
  wordArgs.map((x) => x.toUpperCase());

// tests

// console.log(uppercaseAll('hi'))
// console.log(uppercaseAll('hi', 'bro'))
// console.log(uppercaseAll('hi', 'bro', 'whats'))
// console.log(uppercaseAll('hi', 'bro', 'whats', 'good'))

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

// tests

// console.log(destructureCoordinates([1,2]))

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
