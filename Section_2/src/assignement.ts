function filterArray2<T>(arr: T[], filterFn: (item: T) => boolean): T[] {
  const filteredArray: T[] = [];

  for (const item of arr){
    if(filterFn(item)){
      filteredArray.push(item)
    }
  }

  return filteredArray
}

const numbers2: number[] = [1,2,3,4,5,6,7,8,9];
const evenNumbers = filterArray2(numbers2, (num) => num%2 === 0);
console.log(evenNumbers);

const words: string[] = ['cat', 'dog', 'elephant', 'lion', 'rat'];
const longWords = filterArray2(words, (word) => word.length > 3);
console.log(longWords);

