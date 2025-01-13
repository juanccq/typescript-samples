"use strict";
function add(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
let x = add([1, 2, 3]);
function greet(name, message) {
    if (message != null) {
        console.log(message + " " + name);
    }
    else {
        console.log("hello " + name);
    }
}
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
//# sourceMappingURL=index.js.map