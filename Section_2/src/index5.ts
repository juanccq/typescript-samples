interface Comparable {
  compareTo(other: Comparable): number;
}

class Person implements Comparable {
  constructor(public name: string, public age: number){}

  compareTo(other: Person): number {
    return this.age - other.age;
  }
}

class Numeric implements Comparable {
  constructor(public value: number){}

  compareTo(other: Numeric): number {
    return this.value - other.value;
  }
}

function findMax<T extends Comparable>(arr: T[]): T | null {
  if (arr.length === 0) {
    return null;
  }

  let maxItem: T = arr[0];

  for (const item of arr) {
    if (item.compareTo(maxItem) > 0){
      maxItem = item;
    }
  }

  return maxItem;
}

const numbers1: Numeric[] = [new Numeric(5), new Numeric(2), new Numeric(8), new Numeric(4)];
const maxNumber = findMax(numbers1);

console.log(maxNumber?.value);

const people: Person[] = [
  new Person('Alice', 25),
  new Person('bob', 45)
];

const oldPerson = findMax(people);
console.log(oldPerson?.name);

