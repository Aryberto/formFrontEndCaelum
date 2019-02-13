var inputTamanho = document.querySelector("[name=tamanho]")
var outputTamanho = document.querySelector("[name=valorTamanho]")

inputTamanho.oninput = mostraTamanho

function mostraTamanho() {
    outputTamanho.value = inputTamanho.value
}