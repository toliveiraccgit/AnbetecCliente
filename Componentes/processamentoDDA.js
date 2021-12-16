     /*abrirConfiguraçãoDDA(){
        const configuracaoDDA = this.modalConfiguracaoDDA
        configuracaoDDA.style.opacity = ` 1 `
        configuracaoDDA.style.right = ` 70vw `
    }*/

    /*processoConcluidoDDA(){
        const concluidoProcessoDDA = this.modalProcessoDDA
        concluidoProcessoDDA.style.display = ` flex `

        const resultadoFiltroDDA = this.resultadoDDA
        resultadoFiltroDDA.style.visibility = ` hidden `
        resultadoFiltroDDA.style.opacity = ` 0 `
        document.querySelector('.lista__clientes').reset()
    }*/
    /*fechaProcessoDDA(){
        const concluidoProcessoDDA = this.modalProcessoDDA
        concluidoProcessoDDA.style.display = ` none ` 
    }

    limparResultadoDDA(){
        const resultadoFiltroDDA = this.resultadoDDA
        resultadoFiltroDDA.style.visibility = `hidden`
        resultadoFiltroDDA.style.display = ` none `
        document.querySelector('.lista__clientes').reset()
    }*/

function abrirResultadoDDA (){
    resultadoDDA.style.opacity = ` 1 `
    resultadoDDA.style.display = ` block `
}
function abrirProcessoDDA(){
    modalConfiguracao.style.display = ` flex `
    modalConfiguracao.style.right = ` 0  ` 
}
function fechaConfiguracao(){
    modalConfiguracao.style.display = ` none `
}

function abrirProcessoConcluido(){
    modalProcessoConcluido.style.display = ` flex `
    modalConfiguracao.style.display = ` none `
    resultadoDDA.style.display = ` none `
}
function fecharProcessoConcluido(){
    modalProcessoConcluido.style.display = ` none `
}

function abrirIndicadore(){
    modalIndicadores.style.display = ` flex `
}
function fechaIndicadores(){
    modalIndicadores.style.display = ` none `
}

const resultadoDDA = document.querySelector('#resultado__dda')
const botaoPesquisaDDA = document.querySelector('#pesquisa__dda')

const botaoProcessa = document.querySelector('#botao__processa___dda')
const modalConfiguracao = document.querySelector('#configuracoes-servico')

const modalProcessoConcluido = document.querySelector('#container__processo-concluido-dda')
const modalIndicadores = document.querySelector('#secao__indicadores')