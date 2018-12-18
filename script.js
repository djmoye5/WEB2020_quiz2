var redBox = document.getElementById("redBox");
var blueBox = document.getElementById("blueBox");
var yellowBox = document.getElementById("yellowBox");
var orangeBox = document.getElementById("orangeBox");
var greenBox = document.getElementById("greenBox");

window.onscroll = function (e) {
  if (document.documentElement.scrollTop < 900)
    redBox.style.visibility = "inherit";
  else if (document.documentElement.scrollTop <= 1800)
    blueBox.style.visibility = "inherit";
  else if (document.documentElement.scrollTop <= 2700)
    yellowBox.style.visibility = "inherit";
  else if (document.documentElement.scrollTop <= 3600)
    orangeBox.style.visibility = "inherit";
  else if (document.documentElement.scrollTop > 3600)
    greenBox.style.visibility = "inherit"
}





