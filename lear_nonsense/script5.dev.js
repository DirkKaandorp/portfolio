"use strict";

// toewijzen variabelen aan de buttons
var button1 = document.getElementsByClassName("btn-1")[0];
var button2 = document.getElementsByClassName("btn-2")[0];
var button3 = document.getElementsByClassName("btn-3")[0];
var button4 = document.getElementsByClassName("btn-4")[0]; // toewijzen variabelen aan de div's

var div1 = document.getElementsByClassName("div-1")[0];
var div2 = document.getElementsByClassName("div-2")[0];
var div3 = document.getElementsByClassName("div-3")[0];
var div4 = document.getElementsByClassName("div-4")[0];
/*  
  als op een van de buttons wordt geklikt, moet de eerste regel
  van de limerick plaatsmaken voor de hele limerick, die met 
  een eigen opmaak wordt getoond
  
  bij tweede keer klikken wordt weer alleen de eerste regel
  getoond
*/
// toewijzen click-event-functie aan button 1

button1.onclick = function () {
  if (div1.className == "div-1 open") {
    // maak de div klein
    div1.className = "div-1";
    button1.innerHTML = "see the rest";
  } else {
    // maak de div groter
    div1.className = "div-1 open";
    button1.innerHTML = "hide the rest";
  }
}; // toewijzen click-event-functie aan button 2


button2.onclick = function () {
  if (div2.className == "div-2 open") {
    // maak de div klein
    div2.className = "div-2";
    button2.innerHTML = "see the rest";
  } else {
    // maak de div groter
    div2.className = "div-2 open";
    button2.innerHTML = "hide the rest";
  }
}; // toewijzen click-event-functie aan button 3


button3.onclick = function () {
  if (div3.className == "div-3 open") {
    // maak de div klein
    div3.className = "div-3";
    button3.innerHTML = "see the rest";
  } else {
    // maak de div groter
    div3.className = "div-3 open";
    button3.innerHTML = "hide the rest";
  }
}; // toewijzen click-event-functie aan button 4


button4.onclick = function () {
  if (div4.className == "div-4 open") {
    // maak de div klein
    div4.className = "div-4";
    button4.innerHTML = "see the rest";
  } else {
    // maak de div groter
    div4.className = "div-4 open";
    button4.innerHTML = "hide the rest";
  }
};