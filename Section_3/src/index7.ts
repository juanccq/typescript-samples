function LogInstantiation<T extends { new(...args: any[]): {}}>(constructor: T){
  return class extends constructor {
    constructor(...args: any[]){
      super(...args);
      console.log(`Instantiated ${constructor.name} with arguments: ${JSON.stringify(args)}`);
    }
  }
}

function LogProperty(target: any, propertyName: string) {
  console.log(`Property ${propertyName} declared in class ${target.constructor.name}`);
}

function LogMessage(message: string){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]){
      console.log(`[${message}] Method ${propertyKey} called with arguments: ${args}`);
      const result = originalMethod.apply(this, args);
      return result;
    }

    return descriptor;
  }
}

function timing(target: any, propertyKey: string, descriptor: PropertyDescriptor){
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    const startTime = Date.now();

    const result = originalMethod.apply(this, args);

    const endTime = Date.now();

    const executionTime = endTime - startTime;

    console.log(`Method ${propertyKey} took ${executionTime} milliseconds to execute`);
    
    return result;
  }

  return descriptor;
}

function MultiplyByTwoDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalGetter = descriptor.get;
  const originalSetter = descriptor.set;

  descriptor.get = function () {
    console.log(`Double value of property ${propertyKey}`);
    const originalValue = originalGetter?.call(this);
    return originalValue * 2;
  }

  descriptor.set = function (value: any) {
    console.log(`Setting value of property ${propertyKey} to ${value}`);;
    originalSetter?.call(this, value);
  }
}

@LogInstantiation
class MyClass {
  @LogProperty
  myProperty: string;

  constructor() {
    this.myProperty = "Hello world"
  }
}

@LogInstantiation
class ExampleClass {
  private _value: number = 0;

  constructor(public message: string) {
    console.log(`Exampleclass instatinated with message: ${message}`);    
  }

  @LogMessage('Custom Log Message')
  exampleMethod(arg1: number, arg2: string){
    console.log(`Example method called with arguments ${arg1}, ${arg2}`);
  }

  @timing
  exampleMethod2() {
    for(let i = 0; i<10000000000; i++) {

    }
  }

  @MultiplyByTwoDecorator
  get value(): number {
    return this._value;
  }

  set value(newValue: number){
    this._value = newValue;
  } 
}

const example = new ExampleClass('hello, world');
// example.exampleMethod(23, 'hello world');
// example.exampleMethod2();
example.value = 42;
console.log(example.value);


// const myClass1 = new MyClass();