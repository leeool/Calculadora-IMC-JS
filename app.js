const form = document.querySelector("form")
const inputAltura = document.querySelector('[data-js="altura"]')
const inputPeso = document.querySelector('[data-js="peso"]')
const popUp = document.querySelector('[data-js="popup"]')
const resultadoContainer = document.querySelector('[data-js="resultado"]')
const imcLogContainer = document.querySelector('[data-js="IMC-log"]')
const main = document.querySelector("main")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const imcValue = inputPeso.value / Math.pow(inputAltura.value, 2)

  insertInfoIntoDOM(imcValue)

  showAndRemovePopUp()
})

const insertInfoIntoDOM = (imcValue) => {
  if (!imcValue || imcValue === Infinity) {
    imcLogContainer.textContent = ""
    popUp.firstElementChild.src = "./cross.png"
    resultadoContainer.textContent = "Algo deu errado"
  } else {
    popUp.firstElementChild.src = "./correct.png"
    resultadoContainer.textContent = String(imcValue).slice(0, 5)
    showIMCLog(imcValue)
  }
}

const showAndRemovePopUp = () => {
  popUp.classList.add("popup-show")
  popUp.previousElementSibling.classList.remove("d-none")

  main.addEventListener("click", (event) => {
    if (event.target === popUp.previousElementSibling) {
      popUp.classList.remove("popup-show")
      popUp.previousElementSibling.classList.add("d-none")
    }
  })
}

const showIMCLog = (imcValue) => {
  const imcLog = {
    value1: "Muito abaixo do peso",
    value2: "Abaixo do peso",
    value3: "Peso normal",
    value4: "Acima do peso",
    value5: "Obesidade I",
    value6: "Obesidade II (severa)",
    value7: "Obesidade III (mórbida)"
  }

  if (imcValue <= 17) {
    imcLogContainer.textContent = imcLog.value1
  } else if (imcValue <= 18.49) {
    imcLogContainer.textContent = imcLog.value2
  } else if (imcValue <= 24.99) {
    imcLogContainer.textContent = imcLog.value3
  } else if (imcValue <= 29.99) {
    imcLogContainer.textContent = imcLog.value4
  } else if (imcValue <= 34.99) {
    imcLogContainer.textContent = imcLog.value5
  } else if (imcValue <= 39.99) {
    imcLogContainer.textContent = imcLog.value6
  } else {
    imcLogContainer.textContent = imcLog.value7
  }
}
