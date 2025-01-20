abstract class Animal{
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void;
  public getName(): string {
    return this.name;
  }

  protected sleep(): void {
    console.log(`${this.name} is sleeping`);
  }

  public eat(): void {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal{
  private breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  makeSound(): void {
    console.log('Bark! Bark!');
  }

  public getBreed(): string {
    return this.breed;
  }

  public doDogThings(): void {
    this.sleep();
    this.eat();
  }
}

// let genericAnimal = new Animal('Teddy');
const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.getName());
console.log(myDog.getBreed());
myDog.makeSound();
myDog.doDogThings();

