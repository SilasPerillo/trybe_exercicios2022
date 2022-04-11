let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //console.log('Bem-vinda ' + info.personagem)

// item 2
// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 

info['recorrente'] =  'Sim'

//console.table(info)

// item 3
//Faça um for/in que mostre todas as chaves do objeto. 

for (lista in info) {
    console.log(lista)
}


