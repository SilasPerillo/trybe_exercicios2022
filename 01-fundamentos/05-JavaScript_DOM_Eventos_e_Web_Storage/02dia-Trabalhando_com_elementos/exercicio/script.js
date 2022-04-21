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
main.appendChild(sectionLeftContent);

//item 6

const sectionRightContent = document.createElement('section');
sectionRightContent.className = 'right-content';
main.appendChild(sectionRightContent);

//item 7

const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
sectionLeftContent.appendChild(img);

//item 8

const lista = document.createElement('ul');
sectionRightContent.appendChild(lista)
const listaExtenso = ['um', 'dois', 'treis', 'quatro', 'cinco', 'sete', 'oito', 'nove', 'dez'];
    for (index = 0; index < listaExtenso.length; index += 1) {
        const listaLi = document.createElement('li');
        listaLi.innerText = listaExtenso[index];
        lista.appendChild(listaLi);   
    }

//item 9

for (index = 1; index <= 3; index += 1) {
    const listaH3 = document.createElement('h3');
    listaH3.innerText = "texto que voce que"
    main.appendChild(listaH3);
}


// ------------------------------------------------------------

//item 1

h1.className = 'title';

//item 2

const novosH3 = document.getElementsByTagName('h3')
    for (index = 0; index < novosH3.length; index += 1) {
//        novosH3[index].classList.add('description2'); //esta eh outra forma de adicionar a classe mas assim ela não sobescreve e sim adiciona;
        novosH3[index].className = 'description';
    }

//item 3

const removeLeftContent = document.getElementsByClassName('left-content')[0];
main.removeChild(sectionLeftContent);

// item 4

const centerRightContent = document.getElementsByClassName('right-content')[0];
centerRightContent.style.marginRight='auto';


