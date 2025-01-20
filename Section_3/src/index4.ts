interface Animal2 {
  readonly name: string;
  eat(food: string): void;
  sleep(hours: number): void;
}

interface Pet {
  bark(): void
}

class Dog2 implements Animal2, Pet {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(food: string) {
    console.log(`Ate some ${food}`);
    
  }

  sleep(hours: number): void {
    console.log(`slept for ${hours} hours`);    
  }

  bark(): void {
    console.log('Bark! Bark!');
    
  }
}