function proximoProgresso (){
    primeiroProgresso.style.animation = ` animaProgressoLeft .8s ease-in-out forwards `

    segundoProgresso.style.animation = ` animaProgressoLeft .8s ease-in-out forwards `
    
    barraProgresso.style.width = ` 5.389rem `
    
    containerNumero.style.backgroundColor = ` var(--primary-support) `

    containerNumero.style.color = ` #FFFFFF `
}

function anteriorProgresso(){
    primeiroProgresso.style.animation = ` animaProgressoRight .8s ease-in-out backwards `

    segundoProgresso.style.animation = ` animaProgressoRight .8s ease-in-out backwards `

    barraProgresso.style.width = ` 2.561rem `
    
    containerNumero.style.backgroundColor = ` #7A8594 `

    containerNumero.style.color = ` #FFFFFF `
}

const primeiroProgresso = document.querySelector('#primeiro-progresso___nova-configuracao')

const segundoProgresso = document.querySelector('#segundo-progresso___nova-configuracao')

const barraProgresso = document.querySelector('#barra-progresso')

const containerNumero = document.querySelector('#container-numero')



