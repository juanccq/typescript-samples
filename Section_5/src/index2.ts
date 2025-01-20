export interface Option<T> {
  flatMap<U>(func: (value: T) => None): None;
  flatMap<U>(func: (value: T) => Option<U>): Option<U> ;
  getOrElse(value: T): T; 
}

class Some<T> implements Option<T> {
  constructor(private value: T) {}

  flatMap<U>(func: (value: T) => None): None;
  flatMap<U>(func: (value: T) => Some<U>): Some<U>;

  flatMap<U>(func: (value: T) => Option<U>): Option<U> {
    return func(this.value);
  }

  getOrElse(): T {
    return this.value;
  }
}  

class None implements Option<never>{
  flatMap(): None {
    return this;
  }

  getOrElse<U>(value: U): U {
    return value;
  }
}

function Option<T>(value: null | undefined): None;
function Option<T>(value: T): Some<T>;
function Option<T>(value: T): Option<T> {
  if( value === null) {
    return new None;
  }

  return new Some(value);
}

function divide3(a: number, b: number): Option<number> {
  if( b === 0) {
    return new None();
  }

  return Option(a / b);
}

const result3 = divide3(10, 0)

if( result3 instanceof Some) {
  console.log(result3.getOrElse());
  
} else {
  console.log('Error: cannot divide by zero');
  
}