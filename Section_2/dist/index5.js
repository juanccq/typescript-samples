"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    compareTo(other) {
        return this.age - other.age;
    }
}
class Numeric {
    value;
    constructor(value) {
        this.value = value;
    }
    compareTo(other) {
        return this.value - other.value;
    }
}
function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    let maxItem = arr[0];
    for (const item of arr) {
        if (item.compareTo(maxItem) > 0) {
            maxItem = item;
        }
    }
    return maxItem;
}
const numbers1 = [new Numeric(5), new Numeric(2), new Numeric(8), new Numeric(4)];
const maxNumber = findMax(numbers1);
console.log(maxNumber?.value);
const people = [
    new Person('Alice', 25),
    new Person('bob', 45)
];
const oldPerson = findMax(people);
console.log(oldPerson?.name);
//# sourceMappingURL=index5.js.map