export class Processamento {

    constructor () {
        this.resultado = document.querySelector('#resultado__pesquisa')
        this.botaoFiltro = document.querySelector('#pesquisa__filtro')
        this.limparResultado = document.querySelector('#limpa__filtro___cobranca')
        
        this.limparResultado.addEventListener('click', this.limparResultadoCobranca.bind(this))
        
        this.botaoProcessa = document.querySelector('#botao__processa')
        this.botaoFechaProcesso = document.querySelector('#botao-fecha')
        this.modalProcesso = document.querySelector('#container__processo-concluido')
        
        this.botaoMarcar = document.querySelector('#botao__marcar')
        this.botaoDesmarca = document.querySelector('#botao__desmarca')
        this.checkBox = document.querySelector('#check-cliente')

        this.botaoFiltro.addEventListener('click', this.abrirResultadorCobranca.bind(this))
        this.botaoProcessa.addEventListener('click', this.processoConcluidoCobranca.bind(this))
        this.botaoFechaProcesso.addEventListener('click', this.fechaProcesso.bind(this))

        this.botoesCheckClientes = document.querySelector('#check-cliente')

        this.botaoFiltroPagamento = document.querySelector('#pesquisa__filtro___pagamento')
        this.resultadoPagamento = document.querySelector('#resultado__pesquisa___pagamento')
        this.modalProcessoPagamento = document.querySelector('#container__processo-concluido___pagamento')
        this.limpaResultadoPagamento = document.querySelector('#limpa__filtro___pagamento')

        this.limpaResultadoPagamento.addEventListener('click', this.limparResultadoPagamento.bind(this))

        
        this.botaoFiltroPagamento.addEventListener('click', this.abrirResultadorPagamento.bind(this))

        
        this.checkClientePagamento1 = document.querySelector('#check__pagamento-1')
        
        this.checkClientePagamento1.addEventListener('click', this.abrirResultadorPagamentoCheck1.bind(this))
        
        
        
        this.resultadoPagamentoCheck1 = document.querySelector('#resultado__pesquisa___pagamento-check-1')
        
        this.botaoProcessaPagamento = document.querySelector('#botao__processa___pagamento-1')
        this.botaoProcessaPagamento2 = document.querySelector('#botao__processa___pagamento-2')
        this.botaoFechaProcessoPagamento = document.querySelector('#botao-fecha__pagamento')
        
        this.formulario = document.querySelector('.lista__clientes')
        
        
        this.botaoProcessaPagamento.addEventListener('click', this.processoConcluidoPagamento.bind(this))
        this.botaoFechaProcessoPagamento.addEventListener('click', this.fechaProcessoPagamento.bind(this))
        
    }
    
    abrirResultadorCobranca(){ 
        const resultadoFiltro = this.resultado
        resultadoFiltro.style.visibility = `visible`
        resultadoFiltro.style.display = ` block `
        resultadoFiltro.style.opacity = ` 1 `
    }

    processoConcluidoCobranca(){
        const concluidoProcesso = this.modalProcesso
        concluidoProcesso.style.display = ` flex `

        const resultadoFiltro = this.resultado
        resultadoFiltro.style.visibility = ` hidden `
        resultadoFiltro.style.opacity = ` 0 `
        document.querySelector('.lista__clientes').reset()
    }
    fechaProcesso(){
        const concluidoProcesso = this.modalProcesso
        concluidoProcesso.style.display = ` none ` 
    }

    limparResultadoCobranca(){
        const resultadoFiltro = this.resultado
        resultadoFiltro.style.visibility = `hidden`
        resultadoFiltro.style.display = ` none `
        document.querySelector('.lista__clientes').reset()
    }
    
    
    abrirResultadorPagamento(){
        const resultadoFiltroPagamento = this.resultadoPagamento
        resultadoFiltroPagamento.style.visibility = `visible`
        resultadoFiltroPagamento.style.display = ` block `
        resultadoFiltroPagamento.style.opacity = ` 1 `
    }

    abrirResultadorPagamentoCheck1(){
        const resultadoPagamentoCheck1 = this.resultadoPagamentoCheck1
        
        resultadoPagamentoCheck1.style.visibility = `visible`
        resultadoPagamentoCheck1.style.display = ` block `
        resultadoPagamentoCheck1.style.opacity = ` 1 `
        
        
    }
    processoConcluidoPagamento(){
        const concluidoProcessoPagamento =this.modalProcessoPagamento
        concluidoProcessoPagamento.style.display = ' flex '

        const resultadoPagamentoCheck = this.resultadoPagamentoCheck1
        const resultadoPagamento = this.resultadoPagamento


        resultadoPagamentoCheck.style.display = ` none `
        resultadoPagamento.style.display = ` none `
    }
    fechaProcessoPagamento(){
        const concluidoProcessoPagamento = this.modalProcessoPagamento
        concluidoProcessoPagamento.style.display = ` none ` 
    }
    
    limparResultadoPagamento(){
        const resultadoPagamentoCheck1 = this.resultadoPagamentoCheck1
        
        resultadoPagamentoCheck1.style.visibility = `hidden`
        resultadoPagamentoCheck1.style.display = ` none `
        resultadoPagamentoCheck1.style.opacity = ` 0 `
        

        const resultadoFiltroPagamento = this.resultadoPagamento
        resultadoFiltroPagamento.style.visibility = `hidden`
        resultadoFiltroPagamento.style.display = ` none `
        resultadoFiltroPagamento.style.opacity = ` 0 `
    }

}
