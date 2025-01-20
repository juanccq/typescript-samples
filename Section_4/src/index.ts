function printLength(value: string | number): void {
  if(typeof value === 'string') {
    console.log(value.length);
  }
  else {
    console.log(value);
    
  }
}

class Car{
  startEngine() {
    console.log('Engine Started');
    
  }
}

class Bicycle {
  pedal() {
    console.log('pedaling');
    
  }
}

function moveVehicle(vehicle: Car | Bicycle): void {
  if(vehicle instanceof Car) {
    vehicle.startEngine();
  }
  else {
    vehicle.pedal();
  }
}

const myCar = new Car();
const myBicycle = new Bicycle();

moveVehicle(myCar);
moveVehicle(myBicycle);


interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

function isDog(animal: Dog | Cat): animal is Dog {
  return (animal as Dog).bark !== undefined;
}

function makeSound(animal: Dog | Cat) {
  if ( isDog(animal)) {
    animal.bark();
  }
  else {
    animal.meow();
  }
}

const myDog: Dog = {
  bark: () => console.log('woof')
}

const myCat: Cat = {
  meow: () => console.log('meow')
}

makeSound(myDog);
makeSound(myCat);

type Shape = Circle | Square;

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  length: number;
}

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.length ** 2;
  }
}

const myCircle: Circle = {
  kind: 'circle',
  radius: 5
}

const mySquare: Square = {
  kind: 'square',
  length: 5
}

console.log(getArea(myCircle));
console.log(getArea(mySquare));

