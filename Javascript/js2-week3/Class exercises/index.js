// const button = document.querySelector("button");
// console.log(button);

// button.addEventListener("click", () => console.log("red"));

// Click Counter

const button1 = document.getElementById("button1");

let count = 0;
button1.addEventListener("click", () => {
  console.log(count);
  count = count + 1;
});

const button2 = document.getElementById("button2");
button2.addEventListener("click", () => {
  n;
  console.log(count);
  count = count + 1;
});

//  Delay clicker

const buttonLogIn = document.getElementById("logIn");

buttonLogIn.addEventListener("click", () => {
  setTimeout(() => {
    console.log("3sec delay");
  }, 3000);
});

window.addEventListener("mousemove", mouseMove);

function mouseMove(event) {
  const x = event.clientX;
  const y = event.clientY;
}

// function updateTime() {
//   const currentTime = new Date();
//   let hours = currentTime.getHours();
//   let minutes = currentTime.getMinutes();
//   let seconds = currentTime.getSeconds();

//   console.log(hours);
//   console.log(minutes);
//   console.log(seconds);

//   if (hours == 9 && minutes == 44 && seconds == 40) {
//     alert("Market is open now");
//   }
// }

// setInterval(updateTime, 1000);

function setAlertForSpecificTime(hour, minute) {
  // Get the current time
  const now = new Date();

  // Create a new Date object for the target time today
  const targetTime = new Date();
  targetTime.setHours(hour, minute, 0, 0);

  // Calculate the difference in milliseconds
  let timeDifference = targetTime - now;

  // If the target time is in the past, set it for the next day
  if (timeDifference < 0) {
    targetTime.setDate(targetTime.getDate() + 1);
    timeDifference = targetTime - now;
  }

  // Set the timeout
  setTimeout(() => {
    alert("It's time!");
  }, timeDifference);
}

// Set an alert for 3:00 PM
setAlertForSpecificTime(10, 0);
setAlertForSpecificTime(10, 1);
