function divide(a: number, b: number): number {
  if(b === 0) {
    throw new Error("Canno divide by zero");
  }

  return a / b;
}

try {
  const result = divide(10, 3)
  console.log(result);
} catch (error) {
  if( error instanceof Error) {
    console.error(error);
    
  }
}

class DivideByZero extends RangeError {}

function divide2(a: number, b: number): number | DivideByZero {
  if(b === 0) {
    return new DivideByZero('Cannot divide by zero');
  }

  return a / b;
}

const result2 = divide2(10, 0);

if(result2 instanceof DivideByZero) {
  console.error(result2.message);
} else {
  console.log(result2);
  
}