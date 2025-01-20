class Box<T> {
  private value: T;

  constructor(initialValue: T) {
    this.value = initialValue;
  }

  getValue(): T {
    return this.value;
  }

  setvalue(newValue: T) {
    this.value = newValue;
  }
}

const numberBox = new Box<number>(42);
console.log(numberBox.getValue());

numberBox.setvalue(78);
console.log(numberBox.getValue());

const stringBox = new Box<string>("hello, generics");
console.log(stringBox.getValue());

stringBox.setvalue('updated value');
console.log(stringBox.getValue());