function add(numbers: number[]): number
{
  return numbers.reduce((total, n) => total + n, 0)
}

let x = add([1, 2, 3]);

function greet(name: string, message?: string) {
  if( message != null ) {
    console.log(message + " " + name);
  }
  else {
    console.log("hello "+name);
  }
}

type MyObject = {a: number; b: number; c:number; [key: string]: number};
let obj: MyObject = {a:1, b:2, c:3}

for (let key in obj){
  console.log(`${key}: ${obj[key]}`);
  
}