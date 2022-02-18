function abrirVerConfiguracoes (){
    verConfiguracoes.style.opacity = ` 1 `
    verConfiguracoes.style.display = ` flex `
}

function fechaVerConfiguracoes(){
    verConfiguracoes.style.opacity = ` 0 `
    verConfiguracoes.style.display = ` none `
}

const verConfiguracoes = document.querySelector('#ver-configuracoes')