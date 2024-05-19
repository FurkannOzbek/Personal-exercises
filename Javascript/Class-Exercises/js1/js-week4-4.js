//credit car

let k = 0;

function formatCreditCardNumber(number) {
  const numbersIntoArray = String(number).split("");
  let str = "";
  for (i = 0; i < numbersIntoArray.length; i++) {
    console.log(i);
    if (i % 4 === 0 && i !== 0) {
      //   numbersIntoArray.splice(numbersIntoArray[i + k], 0, " ");
      str += " " + numbersIntoArray[i];
      // k = k + 1;
    } else {
      str += numbersIntoArray[i];
    }
  }
  //numbersIntoArray = numbersIntoArray.join("");
  //   return numbersIntoArray;
  return str;
}

const formattedCreditCardObject = formatCreditCardNumber(1234567894124);
console.log(formattedCreditCardObject);
/*
{
  original: 123456789,
  formatted: "1234 5678 9",

}
*/
