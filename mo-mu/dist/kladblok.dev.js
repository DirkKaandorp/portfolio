"use strict";

// afbeelding 1 in div10 (mouseenter en mouseleave)
var divAfb1 = document.getElementsByClassName('v10').item(0);
var imgAfb1 = document.createElement('div');
imgAfb1.innerHTML = '<img class = "pic" src="pics/mondriaan1.jpg" alt="asdfasdf" width="200">';
divAfb1.addEventListener('mouseenter', function () {
  divAfb1.appendChild(imgAfb1);
});
divAfb1.addEventListener('mouseleave', function () {
  divAfb1.removeChild(imgAfb1);
});