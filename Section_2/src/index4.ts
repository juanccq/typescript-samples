type Swap = {
  <T>(a:T, b:T): [T, T];
};

const swap1: Swap = (a, b) => [b, a];
const resultNumber = swap1(10, 20);
const resultString = swap1("hello", "world");
const resultBoolean = swap1(true, false);

console.log(resultNumber);
console.log(resultString);
console.log(resultBoolean);
