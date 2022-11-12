const form = document.querySelector("form")
const inputAltura = document.querySelector('[data-js="altura"]')
const inputPeso = document.querySelector('[data-js="peso"]')
const popUp = document.querySelector('[data-js="popup"]')
const popUpImage = document.querySelector('[data-js="popup"] img')
const resultadoContainer = document.querySelector('[data-js="resultado"]')
const bgBlack = document.querySelector('[data-js="bg-black"]')
const main = document.querySelector("main")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  const valorPeso = inputPeso.value
  const valorAltura = inputAltura.value
  const imc = valorPeso / Math.pow(valorAltura, 2)

  insertInfoIntoDOM(imc)

  showAndRemovePopUp()
})

const insertInfoIntoDOM = (imc) => {
  if (!imc || imc === Infinity) {
    popUpImage.src = "./cross.png"
    resultadoContainer.textContent = "Algo deu errado"
  } else {
    popUpImage.src = "./correct.png"
    resultadoContainer.textContent = String(imc).slice(0, 5)
  }
}

const showAndRemovePopUp = () => {
  popUp.classList.add("popup-show")
  bgBlack.classList.remove("d-none")

  main.addEventListener("click", (event) => {
    if (event.target === bgBlack) {
      popUp.classList.remove("popup-show")
      bgBlack.classList.add("d-none")
    }
  })
}
