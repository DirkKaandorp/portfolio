// afbeelding 1 in div10 (mouseenter en mouseleave)

const divAfb1 = document.getElementsByClassName('v10').item(0);
const imgAfb1 = document.createElement('div');
imgAfb1.innerHTML = '<img class = "pic" src="pics/mondriaan1.jpg" alt="asdfasdf" width="200">'

divAfb1.addEventListener('mouseenter', () => {
  divAfb1.appendChild(imgAfb1);
})

divAfb1.addEventListener('mouseleave', () => {
  divAfb1.removeChild(imgAfb1);
})