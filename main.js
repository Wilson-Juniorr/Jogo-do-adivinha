const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let xAttempts = 1
let randomNumber = Math.round(Math.random() * 10)

console.log(randomNumber);

function handleTryClick (event) {
  event.preventDefault()

  const inputNamber = document.querySelector("#inputNumber")

  if (Number(inputNamber.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document.querySelector(".screen2 h2").innerText = `Parabréns você acertou em ${xAttempts}`
  }
  
  inputNamber.value = ""
  

  xAttempts++

  console.log(xAttempts);
}

// Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function () {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')

  randomNumber = Math.round(Math.random() * 10)

  xAttempts = 1
})

