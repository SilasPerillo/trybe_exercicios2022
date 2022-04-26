const inputText = document.querySelector("#input-text");
const inputCheckBox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

function criaMetodoPreventDefault(event) {
  event.preventDefault();
  //   console.log(hrefLink);
}

hrefLink.addEventListener("click", criaMetodoPreventDefault);

// evento click no elemento checkbox

inputCheckBox.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(inputCheckBox);
});

// evento keypress no elemento input type="text"

inputText.addEventListener("keypress", (event) => {
  const eventKeyPress = event.key;
  if (eventKeyPress !== 'a') {
    event.preventDefault();
    console.log(inputText)
  }
});
