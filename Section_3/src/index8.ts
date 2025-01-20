import "reflect-metadata";

const positiveNumberMetadataKey = Symbol("positiveNumber");

function positiveNumber(target: Object, propertyKey: string | symbol, parameterIndex: number){
  let existingPositiveNumberParameters: number[] = Reflect.getOwnMetadata(positiveNumberMetadataKey, target, propertyKey) || [];

  existingPositiveNumberParameters.push(parameterIndex);

  Reflect.defineMetadata(positiveNumberMetadataKey, existingPositiveNumberParameters, target, propertyKey);
}

function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>) {
  let method = descriptor.value!;

  descriptor.value = function (...args: any[]) {
    let positiveNumberParameters: number[] = Reflect.getOwnMetadata(positiveNumberMetadataKey, target, propertyName);

    if(positiveNumberParameters) {
      for(let parameterIndex of positiveNumberParameters) {
        const parameterValue = args[parameterIndex];
        if(typeof parameterValue !== 'number' || parameterValue <= 0){
          throw new Error(`Parameter at index ${parameterIndex} must be positive number`)
        }
      }
    }

    return method.apply(this, args);
  }
}

class MathOperations{
  @validate
  multiply(@positiveNumber a: number, @positiveNumber b: number): number {
    return a * b;
  }
}

const math = new MathOperations();
console.log(math.multiply(3, 4));

try {
  console.log(math.multiply(-2, 6));
} catch (error: any) {
  console.error(error.message);
}


try {
  console.log(math.multiply(7, -6));
} catch (error: any) {
  console.error(error.message);
}