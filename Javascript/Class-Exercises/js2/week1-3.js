function changeText() {
  document.getElementById("btn").innerHTML = "Button Clicked";
}

document.getElementById("btn").addEventListener("click", changeText);
