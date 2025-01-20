function concatArray<T = string>(items: T[]): string {
  return items.join(',');
}

const stringArray1: string[] = ['apple', 'banana', 'orange'];
const resultString1 = concatArray(stringArray1);
console.log(resultString1);

const numberArray1: number[] = [1, 2, 3];
const resultNumber1 = concatArray(numberArray1);
console.log(resultNumber1);

const defaultArray1 = ['one', 'two', 'three'];
const resultDefault1 = concatArray(defaultArray1);
console.log(resultDefault1);

