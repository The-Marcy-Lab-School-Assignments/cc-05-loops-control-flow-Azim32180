// Code 1
const multiplesOfSixAndNine = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 6 === 0 && i % 9 === 0) {
      console.log(i);
    }
  }
};
// multiplesOfSixAndNine();

// Code 2
const greaterNum = (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    if (a === b) {
      return "both integers are equal";
    } else if (a > b) {
      return a;
    } else if (b > a) {
      return b;
    } else {
      return null;
    }
  }
};
// console.log(greaterNum(10, 7)); //returns 10
// console.log(greaterNum(1.14, 1.14)); //returns "both integers are equal"
// console.log(greaterNum("21", 21)); //returns null
// console.log(greaterNum("21", "21")); //returns null

// Code 3
const sumOfFourAndSix = () => {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
      sum += i;
    }
  }
  return sum;
};
// console.log(sumOfFourAndSix()); //returns 41832

// Code 4
const oddAndEvenToN = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else if (i % 2 === 1) {
      console.log(`${i} is odd`);
    }
  }
};
// oddAndEvenToN(100);

// Code 5
const sumOfNotDivisibleByTen = () => {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 10 !== 0) {
      sum += i;
    }
  }
  return sum;
};
// console.log(sumOfNotDivisibleByTen());
