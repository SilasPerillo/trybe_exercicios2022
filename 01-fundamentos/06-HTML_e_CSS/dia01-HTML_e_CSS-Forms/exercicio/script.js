function btnSubmit() {
  const captureButton = document.querySelector("#submit-btn");

  captureButton.addEventListener("click", (event) => {
    event.preventDefault();
  });
}

function clearPage() {
  const captureButtonClear = document.querySelector("#clear-page");
  captureButtonClear.addEventListener("click", () => {
    const capInput = document.querySelectorAll("input");
    const capCheckBox = document.querySelectorAll(".class-check-box");
    const capTextArea = document.querySelector("textarea");
    for (let i = 0; i < capInput.length; i += 1) {
      const inputRecebe = capInput[i];
      const checkBoxRecebe = capCheckBox[i];
      inputRecebe.value = "";
      checkBoxRecebe.checked = false;
    }
    capTextArea.value = "";
  });
}

function liberarSubmit() {
  const capReqImg = document.querySelector("#requisicaoImagens");
  capReqImg.addEventListener("change", () => {
    const capBtn = document.querySelector("#submit-btn");
    capBtn.disabled = !capReqImg.checked;
  });
}

function limeterCharacter() {
  const capBtn = document.querySelector("#submit-btn");
  capBtn.addEventListener("click", () => {
    const idFullName = document.querySelector("#fullName");
    const verificaFullName =
      idFullName.value.length > 10 && idFullName.value.length < 40;

    const idEmail = document.querySelector("#userName");
    const verificaEmail =
      idEmail.value.length > 10 && idEmail.value.length < 50;

    const idTextArea = document.querySelector("#textarea-1");
    const verificaTextAera =
      idTextArea.value.length < 500 && idTextArea.value.length > 0;

    if (verificaFullName && verificaEmail && verificaTextAera) {
      alert(
        "Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip."
      );
    } else {
      alert("Dados inválidos");
    }
  });
}

function cssDate() {
  const calendars = bulmaCalendar.attach('[type="date"]');
  // Loop on each calendar initialized
  calendars.forEach((calendar) => {
    // Add listener to select event
    calendar.on("select", (date) => {
      console.log(date);
    });
  });
  // To access to bulmaCalendar instance of an element
  const element = document.querySelector("#select-date");
  if (element) {
    // bulmaCalendar instance is available as element.bulmaCalendar
    element.bulmaCalendar.on("select", (datepicker) => {
      console.log(datepicker.data.value());
    });
  }
}

window.onload = () => {
  btnSubmit();
  clearPage();
  liberarSubmit();
  limeterCharacter();
  cssDate();
};
