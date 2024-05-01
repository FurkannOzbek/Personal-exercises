const number = 2795;
const romen = [];
const ones = (number % 100) % 10;
const tens = Math.floor((number % 100) / 10);
const hundreds = Math.floor((number % 1000) / 100);
const thousands = Math.floor(number / 1000);
// Rules for thousands
function numbersToRoman(number) {
  for (i = 0; i < thousands; i++) {
    romen.push("M");
  }
  // Rules for hundreds
  if (hundreds <= 3) {
    for (i = 0; i < hundreds; i++) {
      romen.push("C");
    }
  } else if (hundreds == 4) {
    romen.push("CD");
  } else if (hundreds == 5) {
    romen.push("D");
  } else if (hundreds > 5 && hundreds < 9) {
    romen.push("D");
    for (i = 5; i < hundreds; i++) {
      romen.push("C");
    }
  } else if (hundreds == 9) {
    romen.push("CM");
  }
  // Rules for tens
  if (tens <= 3) {
    for (i = 0; i < tens; i++) {
      romen.push("X");
    }
  } else if (tens == 4) {
    romen.push("IL");
  } else if (tens == 5) {
    romen.push("L");
  } else if (tens > 5 && tens < 9) {
    romen.push("L");
    for (i = 5; i < tens; i++) {
      romen.push("X");
    }
  } else if (tens == 9) {
    romen.push("XC");
  }
  // Rules for ones
  if (ones <= 3) {
    for (i = 0; i < ones; i++) {
      romen.push("I");
    }
  } else if (ones == 4) {
    romen.push("IV");
  } else if (ones == 5) {
    romen.push("V");
  } else if (ones > 5 && ones < 9) {
    romen.push("V");
    for (i = 5; i < ones; i++) {
      romen.push("I");
    }
  } else if (ones == 9) {
    romen.push("IX");
  }
}

numbersToRoman();
console.log(ones);
console.log(tens);
console.log(hundreds);
console.log(thousands);
console.log(romen);

/* second solution
function romanize(num) {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

console.log(romanize(870)); */
