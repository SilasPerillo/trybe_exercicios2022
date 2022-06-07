
const getData = async () => {
  try {
    const response = await fetch('https://api.coincap.io/v2/assets');
    const { data } = await response.json();
    printCryptoList(data);
  } catch(err) {
    console.log(`Errrroooouuuu \n${err}`);
  }
}

const convertCoin = async () => {
  try {
    const url = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
    const { usd } = await url.json();
    console.log(usd);
  } catch(err) {
    console.log(err);
  }
}

const printCryptoList = (list) =>{
  const divConteiner = document.querySelector('#lista-crytos');
  list.filter((v, index) => index < 10).forEach((coin) => {
    const createLi = document.createElement('li');
    createLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;
    divConteiner.appendChild(createLi);
  })
}

window.onload = () => {
  getData()
  convertCoin()
}