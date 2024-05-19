//Sentence analyzer

positiveWords = ["Awesome", "Good", "Happy", "Perfect"];
negativeWords = ["Bad", "Unfortunately", "Worse", "Unlikely"];
let obj = {};
let sentenceArray = [];
let happyCounter = 0;
let sadCounter = 0;
let score = 0;
let posWords = [];
let negWords = [];
function getSentimentScore(sentence) {
  sentenceArray = sentence.split(" ");
  // positive words counter
  for (let i = 0; i < positiveWords.length; i++) {
    if (sentenceArray.includes(positiveWords[i])) {
      happyCounter++;
      posWords.push(positiveWords[i]);
    }
  }
  //console.log(`Sentence Positiveness Level is = ${happyCounter}`);

  //negative words counter
  for (let j = 0; j < negativeWords.length; j++) {
    if (sentenceArray.includes(negativeWords[j])) {
      sadCounter++;
      negWords.push(negativeWords[j]);
    }
  }
  //console.log(`Sentence Negativeness Level is = ${sadCounter}`);

  // Score decider logic
  if (happyCounter > sadCounter) {
    score = happyCounter - sadCounter;
  } else if (happyCounter === sadCounter) {
    score = 0;
  } else {
    score = happyCounter - sadCounter;
  }
  obj = { score, posWords, negWords };
}
getSentimentScore(
  "This is a Happy but also Bad day, we had Good days before but Unfortunately this day is Unlikely"
);
console.log("Score is between -4 and 4");
console.log(obj);
