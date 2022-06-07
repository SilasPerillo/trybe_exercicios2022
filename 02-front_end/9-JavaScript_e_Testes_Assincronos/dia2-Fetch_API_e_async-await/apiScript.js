// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  return fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => printJoke(data.joke))
    .catch((err) => console.log(err))
};

const printJoke = (joke) => {
  const conteinerH2 = document.querySelector('#jokeContainer');
  conteinerH2.innerText = joke
}

window.onload = () => fetchJoke();