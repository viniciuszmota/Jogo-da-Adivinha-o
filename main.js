
// Variáveis da Aplicação

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick )
btnReset.addEventListener('click', handleResetCLick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetCLick()
    }
})

// Funções
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetCLick () {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen () {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}