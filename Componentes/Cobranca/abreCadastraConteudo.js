function abrirCadastraConteudo (){
    cadastraConteudo.style.opacity = ` 1 `
    cadastraConteudo.style.display = ` flex `
}

function fechaCadastraConteudo(){
    cadastraConteudo.style.opacity = ` 0 `
    cadastraConteudo.style.display = ` none `
}

const cadastraConteudo = document.querySelector('#cadastra-conteudo')
