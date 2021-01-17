
let hamburgerMenu = document.getElementById("hamburger-button");
let pageBody = document.getElementById("body");
let buttonList = document.getElementById("btn-list");
let homeButton = document.getElementsByClassName("home")[0];
let redButton = document.getElementsByClassName("darkred")[0];
let goldButton = document.getElementsByClassName("gold")[0];
let bluevioletButton = document.getElementsByClassName("blueviolet")[0];
let darkorangeButton = document.getElementsByClassName("darkorange")[0];
let darkgreenButton = document.getElementsByClassName("darkgreen")[0];
let blueButton = document.getElementsByClassName("dodgerblue")[0];


console.log(hamburgerMenu);
console.log(pageBody);
console.log(buttonList);
console.log(redButton);
console.log(blueButton);

hamburgerMenu.onclick = function() {

  if (buttonList.className === "hide") {
    buttonList.className = "show";
  } else {
    buttonList.className = "hide";
  }
};

homeButton.onclick = function() {
  pageBody.className = "lightgrey";
  buttonList.className = "hide";
}

redButton.onclick = function() {
  pageBody.className = "darkred";
  buttonList.className = "hide";
};

goldButton.onclick = function() {
  pageBody.className = "gold";
  buttonList.className = "hide";
};


bluevioletButton.onclick = function() {
  pageBody.className = "blueviolet";
  buttonList.className = "hide";
};


darkorangeButton.onclick = function() {
  pageBody.className = "darkorange";
  buttonList.className = "hide";
};


darkgreenButton.onclick = function() {
  pageBody.className = "darkgreen";
  buttonList.className = "hide";
};

blueButton.onclick = function() {
  pageBody.className = "dodgerblue";
  buttonList.className = "hide";
};