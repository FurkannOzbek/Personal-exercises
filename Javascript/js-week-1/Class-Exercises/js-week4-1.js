// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// fib(5) // output = 3
// fib(10) // output = 34

// First we need data for the fibonacci numbers in sequence
const fibData = [0, 1];
// We should make a loop logic for finding out wanted index of fibonacci numbers
// WE can also create the data when we are doing the loop for wanted index
function fib(number) {
  for (i = 2; i < number; i++) {
    let fib = fibData[i - 1] + fibData[i - 2];
    fibData.push(fib);
    return fibData[number - 1];
  }
  console.log(fib(4));
}
console.log(fibData);
fib(4);
console.log(fib(4));
// Render output

// Mentor solution

// function fibRec(n){
//     if (n ===1{
//         return 0;
//     }
// if(n==2){
//     return 1;
// })
// return fibRec(n-1) + fibRec(n-2)
// }

// Another mentor soliton

// function fibCorrect(n){
//     const fiboNumbers= [0,1];
//     for(let i=2;i<n,i++){
//         newNumber = fiboNumbers[0]+ fiboNumbers[1];
//         fiboNumbers[0] = fiboNumbers[1]
//         fiboNumbers[i] = newNumber;
//     }
//     return newNumber;
// }
