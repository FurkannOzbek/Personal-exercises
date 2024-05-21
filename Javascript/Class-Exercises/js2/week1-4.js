function modeChange() {
  if (document.body.style.backgroundColor == "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("switchMode").style.color = "black";
    document.getElementById("switchMode").style.backgroundColor = "white";
  } else if (document.body.style.backgroundColor == "black") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("switchMode").style.color = "white";
    document.getElementById("switchMode").style.backgroundColor = "black";
  }
}

document.getElementById("switchMode").addEventListener("click", modeChange);
