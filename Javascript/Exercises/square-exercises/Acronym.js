// Task =  Help generate some jargon by writing a program that converts a long name
// like Portable Network Graphics to its acronym (PNG).

// Created a function for selecting first index of the word
function firstLetter(word) {
  return word[0];
}

// Created a function for dynamic webpage with button click
function acronym() {
  // Fetching input value
  let givenWord = document.getElementById("givenWord").value;
  // Seperating words into another array
  const splitWords = givenWord.split(" ");
  // Using firstLetter function for each item in the array
  const acr = splitWords.map(firstLetter);
  // Merging all first letters into a string and make them upper case
  const acrUpper = acr.join("").toUpperCase();
  // Fetch the result html tag and change it with the result
  document.getElementById("acronym1").innerHTML = `Acronym : ${acrUpper}`;
}
