let x: any = 5;
let y: any = ['String'];
let z: any = x + y;

type Person = {
  name: string,
  age: number,
  isStudent: boolean,
  gender?: Gender
};

const person1: Person = {
  name: 'juan',
  age: 41,
  isStudent: true
}

const person2: Person = {
  name: 'tesla',
  age: 3,
  isStudent: false
}

enum Gender {
  Male,
  Female
};

person1.gender = Gender.Male;
person2.gender = Gender.Female;

console.log(person1);
console.log(person2);

