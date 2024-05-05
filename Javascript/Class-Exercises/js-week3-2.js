const fruits = ["apple", "banana", "orange"];
// Investigate array methods: pop, push, shift, unshift, includes

// without touching the above lines, add "kiwi" to the fruits array
fruits.push("kiwi");
// extract "kiwi" from the array and log it out
fruits.pop("kiwi");
// the fruits array should now be without "kiwi"

// without touching the above lines
// add dragonfruit and elderberry to the array

fruits.push("dragonfruit", "elderberry");

if (fruits.includes("banana")) {
  console.log("There is banana");
} else {
  console.log("no banana");
}
// console.log "Banana in fruit basket" or "No Banana in ..."
// whether "banana" is inside of the fruit array

// add strawberry to the begginning of the fruit array

fruits.unshift("strawberry");

// extract strawberry from the fruit array into a variable
const singleFruit = fruits.shift();
// console log the fruit basket and the variable
console.log(singleFruit);

console.log(fruits);
öm;
