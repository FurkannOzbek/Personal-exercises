//Fizz Buzz
function oneToHundred(num1, num2) {
  for (i = 1; i <= 100; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log("Fizz Buzz");
    } else if (i % num1 === 0) {
      console.log("Fizz");
    } else if (i % num2 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
oneToHundred(7, 10);
