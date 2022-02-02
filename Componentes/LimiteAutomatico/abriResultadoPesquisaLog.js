export class AbriPesquisa {

    constructor () {
        /*---------------------------CADASTRA-LAYOUT------------------------------*/
        this.botaoAbriPesquisaLog = document.querySelector("#botao__pesquisa-log")

        this.resultadoPesquisaLog = document.querySelector("#resultado__log")

        this.botaoAbriPesquisaLog.addEventListener('click', this.abriResultadoPesquisa.bind(this))
    }
    /*---------------------------CADASTRA-LAYOUT------------------------------*/
    abriResultadoPesquisa(){
        const resultadoPesquisaLog = this.resultadoPesquisaLog

        resultadoPesquisaLog.style.display = ` flex `


    }


}