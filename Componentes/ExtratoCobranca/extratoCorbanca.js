function abrirResultadoExtratoCobranca (){
    resultadoExtratoCobranca.style.opacity = ` 1 `
    resultadoExtratoCobranca.style.display = ` flex `

    feedbackExtratoCobranca.style.animation = ` animatetopFeedback 5s ease-in-out ` 
}

const resultadoExtratoCobranca = document.querySelector('#resultado__extrato-cobranca')

const feedbackExtratoCobranca = document.querySelector('#container__feedback-filtros___extrato-cobranca')