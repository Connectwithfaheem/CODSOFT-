const resultDisplay = document.querySelector('#display')
const equal = document.querySelector(".equal")


function cleanDisplay() {
  resultDisplay.innerHTML = ""
}

function deleteChar() {
  if(resultDisplay.textContent) {
    let result = document.querySelector('#display').innerHTML
    resultDisplay.innerHTML = result.substring(0, result.length - 1)
  }
}

function insert(value) {
  
  resultDisplay.innerHTML += value
}

function calc() {
  if (resultDisplay.textContent != "Erro") {
    document.querySelector("#display").innerHTML = eval(resultDisplay.innerHTML)
  }
}