
function validarChute(chute) {
    const numero = +chute //converte em numero inteiro [quem diria kkkk]

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>chute inválido</div>'
        return
    }

    if(numeroMaiorMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor invalido: tente chutar um numero entre ${menorValor} até ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
            <button class="jgrnovamente" id="botao">Jogar Novamente</button>
        `
        botao.classList.add('on')
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML = `
        <div class="box">${numero}</div>
        <div>O número secreto é menor <i class="fa-solid fa-down-long fa-xs"></i></div>
    `
    } else {
        elementoChute.innerHTML = `
        <div class="box">${numero}</div>
        <div>O número secreto é maior <i class="fa-solid fa-up-long fa-xs"></i></div>
    `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorMenor (numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'botao') {
        location.reload()
    }
})
