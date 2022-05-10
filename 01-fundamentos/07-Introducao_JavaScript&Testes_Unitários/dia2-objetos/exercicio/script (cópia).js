function sum() {
  const value1 = document.querySelector('#value1').value;
  const value2 = document.querySelector('#value2').value;
  
  try {
    if (isNaN(value1) || isNaN(value2)) {
      throw new Error('Os valores devem ser numéricos')
    }
    if (!value1 || !value2) {
      throw new Error('Os valores devem ser numéricos bazinga')
    }
    const result = parseInt(value1) + parseInt(value2);
    document.querySelector('#result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
    return result;
  } catch (error) {
    document.querySelector('#result').innerHTML = `Erro: ${error.message}`;
  }
    
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';

}
const verifyIsNumber = (value1, value2) => {


}


window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}