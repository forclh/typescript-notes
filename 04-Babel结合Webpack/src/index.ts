import { hi } from "./m1";

function sum(a: number, b: number): number {
  return a + b
}

const obj = { name: 'ak', age: 33 };
console.log(obj);
obj.age = 18;
console.log(obj);

console.log(sum(123, 456));
console.log('hello');
console.log(hi);


let fn = (a: number, b: number): number => a + b

console.log(123, 456);
console.log(77, 22);

// console.log(Promise);