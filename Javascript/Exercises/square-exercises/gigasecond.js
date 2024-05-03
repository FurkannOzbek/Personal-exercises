function gigaSecond() {
  const date = document.getElementById("givenDate").value;

  const input = new Date(date);
  const parameterDate = new Date(input);
  const currentDate = new Date();
  const difference = currentDate - parameterDate;
  const second = Math.abs(difference / 1000);
  const gigaSecond = (second / 1e9).toFixed(4);

  if (second < 86400) {
    document.getElementById(
      "date1"
    ).innerHTML = `Time difference should be more than 2 days`;
  } else {
    document.getElementById(
      "date1"
    ).innerHTML = `Time difference in gigaseconds are: ${gigaSecond}`;
  }
  console.log(parameterDate);
}
