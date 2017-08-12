// getRandomInt
const minRandomNumber = 0;
const maxRandomNumber = 100;
// The maximum and the minimum is inclusive
export const getRandomInt = (min = minRandomNumber, max = maxRandomNumber) =>
  Math.floor(Math.random() * ((Math.floor(max) - Math.ceil(min)) + 1)) +
  Math.ceil(min);

// gcd
export const gcd = (number1, number2) => {
  const iter = (a, b) => {
    if (a > b) {
      return iter(a - b, b);
    } else if (a < b) {
      return iter(b - a, a);
    }
    return a;
  };
  return iter(number1, number2);
};
