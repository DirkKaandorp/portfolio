"use strict";

var hamburgerMenu = document.getElementById("hamburger-button");
var pageBody = document.getElementById("body");
var buttonList = document.getElementById("btn-list");
var homeButton = document.getElementsByClassName("home")[0];
var redButton = document.getElementsByClassName("darkred")[0];
var goldButton = document.getElementsByClassName("gold")[0];
var bluevioletButton = document.getElementsByClassName("blueviolet")[0];
var darkorangeButton = document.getElementsByClassName("darkorange")[0];
var darkgreenButton = document.getElementsByClassName("darkgreen")[0];
var blueButton = document.getElementsByClassName("dodgerblue")[0];
console.log(hamburgerMenu);
console.log(pageBody);
console.log(buttonList);
console.log(redButton);
console.log(blueButton);

hamburgerMenu.onclick = function () {
  if (buttonList.className === "hide") {
    buttonList.className = "show";
  } else {
    buttonList.className = "hide";
  }
};

homeButton.onclick = function () {
  pageBody.className = "lightgrey";
  buttonList.className = "hide";
};

redButton.onclick = function () {
  pageBody.className = "darkred";
  buttonList.className = "hide";
};

goldButton.onclick = function () {
  pageBody.className = "gold";
  buttonList.className = "hide";
};

bluevioletButton.onclick = function () {
  pageBody.className = "blueviolet";
  buttonList.className = "hide";
};

darkorangeButton.onclick = function () {
  pageBody.className = "darkorange";
  buttonList.className = "hide";
};

darkgreenButton.onclick = function () {
  pageBody.className = "darkgreen";
  buttonList.className = "hide";
};

blueButton.onclick = function () {
  pageBody.className = "dodgerblue";
  buttonList.className = "hide";
};