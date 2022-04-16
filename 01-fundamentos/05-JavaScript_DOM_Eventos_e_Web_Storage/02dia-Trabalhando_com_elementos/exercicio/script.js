const body = document.getElementsByTagName('body')[0];
const h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);
/* 
const h1 = document.createElement('h1');
document.body.appendChild(h1).innerText = 'Exercício 5.2 - JavaScript DOM';
*/

//item 2
const main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

//item 3
const sectionCenterContent = document.createElement('section');
sectionCenterContent.className = 'center-content';
main.appendChild(sectionCenterContent);

//item 4

const pFilhoDeSection = document.createElement('p');
pFilhoDeSection.innerText = 'Qualquer texto aqui pq estou sem criatividade';
sectionCenterContent.appendChild(pFilhoDeSection);

//item 5

const sectionLeftContent = document.createElement('section');
sectionLeftContent.className = 'left-content';




