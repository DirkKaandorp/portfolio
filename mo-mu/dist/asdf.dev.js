"use strict";

// afbeelding 1 in div10 (mouseenter en mouseleave)
var divAfb1 = document.getElementsByClassName('v10').item(0);
var imgAfb1 = document.createElement('img');
imgAfb1.className = 'pic';
imgAfb1.innerHTML = '<img src="pics/mondriaan1.jpg" alt=" " max-width="250>Basisonderwijs</img>';
divAfb1.addEventListener('mouseenter', function () {
  divAfb1.appendChild(imgAfb1);
});
divAfb1.addEventListener('mouseleave', function () {
  divAfb1.removeChild(imgAfb1);
});