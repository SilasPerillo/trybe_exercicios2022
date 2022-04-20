function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
function diasCorridos () {
  const diasMes = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const alocandoDia = document.createElement('li');
    alocandoDia.innerText = dezDaysList[index];
    alocandoDia.className = 'day';
    const day = dezDaysList[index];

    if (day == 24 || day == 25 || day == 31) {
      alocandoDia.className += ' holiday';
    }
    
    if (day == 4 || day == 11 || day == 18 || day == 25) {
      alocandoDia.classList.add('friday');
    }
    diasMes.appendChild(alocandoDia);
    // console.log('teste');
  }
}
diasCorridos();


//item 2


function createButton (string, id) {
  const botaoFeriado = document.createElement('button');
  const buttonsContainer = document.querySelector('.buttons-container')
  botaoFeriado.id = id;
  botaoFeriado.innerText = string
  buttonsContainer.appendChild(botaoFeriado);
  
}
createButton('Feriado', 'btn-holiday');

// item 3

const botaoFeriado = document.querySelector('#btn-holiday')
botaoFeriado.addEventListener('click', function() {
  const holiday = document.querySelectorAll('.holiday');


  for (let index = 0; index < holiday.length; index += 1) {
    if (holiday[index].style.backgroundColor === 'orange') {
      holiday[index].style.backgroundColor = 'rgb(238,238,238)';
    } else /*if (holiday[index].style.backgroundColor !== 'rgb(238,238,238)')*/ {
      holiday[index].style.backgroundColor = 'orange';
    }
  }
})


//item 4

createButton("Sexta-feira", "btn-friday")

// item 5

const buttonTextFriday = document.querySelector("#btn-friday");

buttonTextFriday.addEventListener('click', function(){
  const classFriday = document.querySelectorAll('.friday');

  for (index = 0; index < classFriday.length; index += 1) {
    if (classFriday[index].innerText == 'Sextou') {
      classFriday[index].innerText = Number(classFriday[index].previousElementSibling.innerText) + 1
    } else {
      classFriday[index].innerText = 'Sextou';
    }
  }
})

// item 6



const upSize = document.querySelectorAll('.day');
  for (index = 0; index < upSize.length; index += 1) {
    upSize[index].addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
    })
  }
  for (index = 0; index < upSize.length; index += 1) {
    upSize[index].addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
    })
  }

// item 7

const tasks = document.querySelector(".my-tasks");

function taskBar(string) {
  const tagTasks =  document.createElement('span');
  tagTasks.innerText = string;
  tasks.appendChild(tagTasks);
}

taskBar('budega');

// item 8


function legendColor(cor) {
  const divTask = document.createElement('div');
  divTask.className = 'task';
  divTask.style.background = cor;
  tasks.appendChild(divTask)
}
legendColor('green');

// item 9

const classTask = document.querySelector('.task');

classTask.addEventListener('click', function (event) {
  if (classTask.className == 'task') {
    event.target.className = 'task selected';
    //event.target.classList += ' selected';
  } else {
    event.target.className = 'task'
    //event.target.classList.remove('selected')
  }
})

// item 10

//const verificaBotao = document.querySelectorAll('.selected')
const divT = document.querySelector('.task')
//const divY = document.querySelector('.selected')
for (let i of upSize) {
  i.addEventListener('click', function (event){ 
      if (divT == document.querySelector('.selected')) {
  //  if (divT.classList.contains('selected')) {
      if (i.style.color !== 'green') {
      event.target.style.color = 'green';
    } else {
      event.target.style.color = 'rgb(119, 119, 119)'
    }
    }
  })
}

// bonus 

const buttonAdd = document.querySelector('#btn-add');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('.task-list');
/*
buttonAdd.addEventListener('click', function (){
  const 
 
  
})
*/











