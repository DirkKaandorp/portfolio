"use strict";

// bezoek-menu: opties tonen bij mouseenter en mouseleave (div met class v9)
var divBezoek = document.getElementsByClassName('v9').item(0);
var bezoekOpties = document.createElement('ul');
bezoekOpties.className = 'ul-div';
var tijdenAnchor = document.createElement('a');
var prijzenAnchor = document.createElement('a');
var adresAnchor = document.createElement('a');
tijdenAnchor.innerHTML = '<a href="tijden.html">Openingstijden</a>';
prijzenAnchor.innerHTML = '<a href="prijzen.html">Prijzen</a>';
adresAnchor.innerHTML = '<a href="adres.html">Adres</a>';
divBezoek.addEventListener('mouseenter', function () {
  divBezoek.innerHTML = '';
  divBezoek.appendChild(bezoekOpties);
  bezoekOpties.appendChild(tijdenAnchor);
  bezoekOpties.appendChild(prijzenAnchor);
  bezoekOpties.appendChild(adresAnchor);
});
divBezoek.addEventListener('mouseleave', function () {
  divBezoek.innerHTML = '<h2>Bezoek</h2>';
  bezoekOpties.removeChild(tijdenAnchor);
  bezoekOpties.removeChild(prijzenAnchor);
  bezoekOpties.removeChild(adresAnchor);
}); // prg&agenda-menu: opties tonen bij mouseenter en mouseleave (in div met class v25)

var divProgramma = document.getElementsByClassName('v25').item(0);
var programmaOpties = document.createElement('ul');
programmaOpties.className = 'ul-div';
var expoAnchor = document.createElement('a');
var activiteitenAnchor = document.createElement('a');
var najaarAnchor = document.createElement('a');
expoAnchor.innerHTML = '<a href="exposities.html">Exposities</a>';
activiteitenAnchor.innerHTML = '<a href="#">Activiteiten</a>';
najaarAnchor.innerHTML = '<a href="#">Najaar 2021</a>';
divProgramma.addEventListener('mouseenter', function () {
  divProgramma.innerHTML = '';
  divProgramma.appendChild(programmaOpties);
  programmaOpties.appendChild(expoAnchor);
  programmaOpties.appendChild(activiteitenAnchor);
  programmaOpties.appendChild(najaarAnchor);
});
divProgramma.addEventListener('mouseleave', function () {
  divProgramma.innerHTML = '<h2>Programma</h2>';
  programmaOpties.removeChild(expoAnchor);
  programmaOpties.removeChild(activiteitenAnchor);
  programmaOpties.removeChild(najaarAnchor);
}); // educatie-menu: opties tonen bij mouseenter en mouseleave (in div met class v38)

var divEducatie = document.getElementsByClassName('v38').item(0);
var educatieOpties = document.createElement('ul');
educatieOpties.className = 'ul-div';
var basisschoolAnchor = document.createElement('a');
var voortgezetAnchor = document.createElement('a');
basisschoolAnchor.innerHTML = '<a href="#">Basisonderwijs</a>';
voortgezetAnchor.innerHTML = '<a href="#">Voortgezet onderwijs</a>';
divEducatie.addEventListener('mouseenter', function () {
  divEducatie.innerHTML = '';
  divEducatie.appendChild(educatieOpties);
  educatieOpties.appendChild(basisschoolAnchor);
  educatieOpties.appendChild(voortgezetAnchor);
});
divEducatie.addEventListener('mouseleave', function () {
  divEducatie.innerHTML = '<h2>Educatie</h2>';
  educatieOpties.removeChild(basisschoolAnchor);
  educatieOpties.removeChild(voortgezetAnchor);
});
/* 
NOG IN DE MAAK: afbeeldingen tevoorschijn laten komen en laten verdwijnen 
    bij mouseenter en mouseleave in lege vakjes in het raster

Uitzoeken: hoe krijg ik de afbeeldingen passend en vóór alle naastliggende vakjes?
*/
// afbeelding 1 in div10 (mouseenter en mouseleave) 
// const divAfb1 = document.getElementsByClassName('v10').item(0);
// console.log(divAfb1)
// const imgAfb1 = document.createElement('div');
// console.log(imgAfb1)
// imgAfb1.innerHTML = '<img class = "pic" src="pics/mondriaan1.jpg" alt="asdfasdf" width="150">'
// divAfb1.addEventListener('mouseenter', () => {
//   divAfb1.appendChild(imgAfb1);
// })
// divAfb1.addEventListener('mouseleave', () => {
//   divAfb1.removeChild(imgAfb1);
// })