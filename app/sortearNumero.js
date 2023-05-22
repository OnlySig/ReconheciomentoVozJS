const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(`este é seu numero secreto: ${numeroSecreto}`)

const elementoMenor = document.querySelector('#menor-valor');
const elementoMaior = document.querySelector('#maior-valor');
elementoMaior.innerHTML = maiorValor
elementoMenor.innerHTML = menorValor