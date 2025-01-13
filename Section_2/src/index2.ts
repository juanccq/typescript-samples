function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;

  while( true ) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let fibGen = createFibonacciGenerator();
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());
console.log(fibGen.next());

let numbers = {
  *[Symbol.iterator]() {
    for (let n=1; n<=10; n++){
      yield n;
    }
  }
}

for(let n of numbers) {
  console.log(n);
}

let all = [...numbers]
let [one, two, three] = numbers;
console.log(all);
console.log(one, two, three);

