// function add(a: number, b: number): number {
//   return a + b;
// }


type Add = (a: number, b?: number) => number;

let add1: Add = (a, b=5) => {
  return a + b;
}

console.log(add1(2));

function increment(f: (index: number) => void, n: number){
  for(let i=0; i<n; i++) {
    f(i);
  }
}

increment( n => console.log(n), 4 );


type Greet = {
  (name: string): string;
  (name: string, age: number): string;
}

let greet1: Greet = (name: string, ageOrUndefined?: number) => {
  if(ageOrUndefined !== undefined) {
    const age = ageOrUndefined;
    return `Hello ${name}! You are ${age} years old!`;
  }
  else {
    return `Hello ${name}!`;
  }
};

console.log(greet1('Juan', 42));
console.log(greet1('Pablo'));
