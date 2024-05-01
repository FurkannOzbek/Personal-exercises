// Rules for thousands
function numbersToRoman() {
  let number = document.getElementById("givenNumber").value;
  let sum = "";
  const ones = (number % 100) % 10;
  const tens = Math.floor((number % 100) / 10);
  const hundreds = Math.floor((number % 1000) / 100);
  const thousands = Math.floor(number / 1000);

  if (number > 4000) {
    sum =
      "Please enter a number below 4000 , ancient rome had no numbers more than 4000";
  } else {
    for (i = 0; i < thousands; i++) {
      sum = sum + "M";
    }
    // Rules for hundreds
    if (hundreds <= 3) {
      for (i = 0; i < hundreds; i++) {
        sum = sum + "C";
      }
    } else if (hundreds == 4) {
      sum = sum + "CD";
    } else if (hundreds == 5) {
      sum = sum + "D";
    } else if (hundreds > 5 && hundreds < 9) {
      sum = sum + "D";
      for (i = 5; i < hundreds; i++) {
        sum = sum + "C";
      }
    } else if (hundreds == 9) {
      sum = sum + "CM";
    }
    // Rules for tens
    if (tens <= 3) {
      for (i = 0; i < tens; i++) {
        sum = sum + "X";
      }
    } else if (tens == 4) {
      sum = sum + "IL";
    } else if (tens == 5) {
      sum = sum + "L";
    } else if (tens > 5 && tens < 9) {
      sum = sum + "L";
      for (i = 5; i < tens; i++) {
        sum = sum + "X";
      }
    } else if (tens == 9) {
      sum = sum + "XC";
    }
    // Rules for ones
    if (ones <= 3) {
      for (i = 0; i < ones; i++) {
        sum = sum + "I";
      }
    } else if (ones == 4) {
      sum = sum + "IV";
    } else if (ones == 5) {
      sum = sum + "V";
    } else if (ones > 5 && ones < 9) {
      sum = sum + "V";
      for (i = 5; i < ones; i++) {
        sum = sum + "I";
      }
    } else if (ones == 9) {
      sum = sum + "IX";
    }
  }

  document.getElementById("roman1").innerHTML = `Roman number : ${sum}`;
}

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
