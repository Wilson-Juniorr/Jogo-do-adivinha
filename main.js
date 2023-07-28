//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const inputNumber = document.querySelector("#inputNumber")

let xAttempts = 1
let randomNumber = Math.round(Math.random() * 10) 

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keyEnter)

//função callBack
function handleTryClick (event) {
  event.preventDefault() // não faça o padrão

  if (inputNumber.value < 0 || inputNumber.value > 10){
    alert("Por favor insira um número de 0 a 10!")
  }
  
  if (Number(inputNumber.value) == randomNumber ) {
    togglePrint()
    document.querySelector(".screen2 h2").innerText = `Parabréns você acertou em ${xAttempts}`
  }
  
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick () {
  togglePrint()

  randomNumber = Math.round(Math.random() * 10)

  xAttempts = 1
}

function togglePrint(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function keyEnter (e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
}

