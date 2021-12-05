export class Processamento {

    constructor () {
        this.resultado = document.querySelector('#resultado__pesquisa')
        this.botaoFiltro = document.querySelector('#pesquisa__filtro')
        
        this.botaoProcessa = document.querySelector('#botao__processa')
        this.botaoFechaProcesso = document.querySelector('#botao-fecha')
        this.modalProcesso = document.querySelector('#container__processo-concluido')
        
        this.botaoMarcar = document.querySelector('#botao__marcar')
        this.botaoDesmarca = document.querySelector('#botao__desmarca')
        this.checkBox = document.querySelector('#check-cliente')

        this.botaoFiltro.addEventListener('click', this.abrirResultador.bind(this))
        this.botaoProcessa.addEventListener('click', this.processoConcluido.bind(this))
        this.botaoFechaProcesso.addEventListener('click', this.fechaProcesso.bind(this))
        this.botaoMarcar.addEventListener('change', this.marcaTodos.bind(this))

        this.botoesCheckClientes = document.querySelector('#check-cliente')
    }
    
    abrirResultador(){ 
        const resultadoFiltro = this.resultado
        resultadoFiltro.style.visibility = `visible`
        resultadoFiltro.style.opacity = ` 1 `
    }

    processoConcluido(){
        const concluidoProcesso = this.modalProcesso
        concluidoProcesso.style.display = ` flex `

        const resultadoFiltro = this.resultado
        resultadoFiltro.style.visibility = ` hidden `
        resultadoFiltro.style.opacity = ` 0 `
    }

    fechaProcesso(){
        const concluidoProcesso = this.modalProcesso
        concluidoProcesso.style.display = ` none ` 
    }

    marcaTodos(){
            const botoesClientes = this.botoesCheckClientes
            botoesClientes.check
          }
    }


