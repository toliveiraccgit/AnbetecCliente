function abrirNovaConfiguracao (){
    novaConfiguracao.style.opacity = ` 1 `
    novaConfiguracao.style.display = ` flex `
}

function fechaNovaConfiguracao(){
    novaConfiguracao.style.opacity = ` 0 `
    novaConfiguracao.style.display = ` none `
}

const novaConfiguracao = document.querySelector('#nova-configuracao')