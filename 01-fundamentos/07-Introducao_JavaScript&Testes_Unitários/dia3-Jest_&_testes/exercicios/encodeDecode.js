function encode(texto) {
  texto = texto.replace(/a/gi, '1');
  texto = texto.replace(/e/gi, '2');
  texto = texto.replace(/i/gi, '3');
  texto = texto.replace(/o/gi, '4');
  texto = texto.replace(/u/gi, '5');

  return texto
}

module.exports = {encode}

function decode(texto) {
  texto = texto.replace(/1/gi, 'a');
  texto = texto.replace(/2/gi, 'e');
  texto = texto.replace(/3/gi, 'i');
  texto = texto.replace(/4/gi, 'o');
  texto = texto.replace(/5/gi, 'u');

  return texto
}

module.exports = {decode}