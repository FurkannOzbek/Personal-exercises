const myFunctionArrow = (argument) => console.log(argument);
myFunctionArrow("hello arrow");

const add = (a, b) => a + b;
console.log(add(1, 2));

const fruits = ["apple", "banana", "pear"];

fruits.forEach((fruit, index) => console.log(fruit, index));

fruits.forEach((_, index) => console.log(index)); //for skip the argument

const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x * 2); // Create new array with the result expected output [2,8,18,3]

// map

// const fruistElements = fruits.map((fruit) => {
//   const p = document.createElement("p");
//   p.innerText = fruit;
//   return p;
// });
// console.log(fruistElements);

// Filter
const words = ["spray", "asd", "dsa"];

const result = words.filter((word) => word.length > 3);

console.log(result);
