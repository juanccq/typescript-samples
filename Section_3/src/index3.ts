interface Animal {
  canFly: boolean;
}

interface Dog3 extends Animal {
  breed: string,
  age: number
}

interface User {
  name: string
}

interface User {
  age: number
}

let user: User = {
  name: "codestars",
  age: 33
}