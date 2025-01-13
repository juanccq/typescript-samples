"use strict";
// function add(a: number, b: number): number {
//   return a + b;
// }
let add1 = (a, b = 5) => {
    return a + b;
};
console.log(add1(2));
function increment(f, n) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}
increment(n => console.log(n), 4);
let greet1 = (name, ageOrUndefined) => {
    if (ageOrUndefined !== undefined) {
        const age = ageOrUndefined;
        return `Hello ${name}! You are ${age} years old!`;
    }
    else {
        return `Hello ${name}!`;
    }
};
console.log(greet1('Juan', 42));
console.log(greet1('Pablo'));
//# sourceMappingURL=index3.js.map