function abrirCadastraNotificacoes (){
    cadastraNotificacoes.style.opacity = ` 1 `
    cadastraNotificacoes.style.display = ` flex `
}

function fechaCadastraNotificacoes(){
    cadastraNotificacoes.style.opacity = ` 0 `
    cadastraNotificacoes.style.display = ` none `
}

const cadastraNotificacoes = document.querySelector('#cadastra-notificacoes')