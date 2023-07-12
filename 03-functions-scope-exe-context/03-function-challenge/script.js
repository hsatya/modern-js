const getCelcius = (fahr) => ((fahr - 32.0) * 5.0) / 9.0;

console.log(getCelcius(32));
console.log(`The temperatuer is ${getCelcius(32)} \xB0C`);

/**
 * Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum *and maximum numbers in the array.
 */

const minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { min, max };
};

console.log(minMax([1, 2, 3, 4, 5, 6]));
