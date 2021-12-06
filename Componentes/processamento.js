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

        this.botaoFiltro.addEventListener('click', this.abrirResultadorCobranca.bind(this))
        this.botaoProcessa.addEventListener('click', this.processoConcluidoCobranca.bind(this))
        this.botaoFechaProcesso.addEventListener('click', this.fechaProcesso.bind(this))
        this.botaoMarcar.addEventListener('change', this.marcaTodos.bind(this))

        this.botoesCheckClientes = document.querySelector('#check-cliente')

        this.botaoFiltroPagamento = document.querySelector('#pesquisa__filtro___pagamento')
        this.resultadoPagamento = document.querySelector('#resultado__pesquisa___pagamento')
        this.modalProcessoPagamento = document.querySelector('#container__processo-concluido___pagamento')
        
        this.botaoFiltroPagamento.addEventListener('click', this.abrirResultadorPagamento.bind(this))

        
        this.checkClientePagamento1 = document.querySelector('#check__pagamento-1')
        this.checkClientePagamento2 = document.querySelector('#check__pagamento-2')
        
        this.checkClientePagamento1.addEventListener('change', this.abrirResultadorPagamentoCheck1.bind(this))
        this.checkClientePagamento2.addEventListener('change', this.abrirResultadorPagamentoCheck2.bind(this))
        
        
        
        this.resultadoPagamentoCheck1 = document.querySelector('#resultado__pesquisa___pagamento-check-1')
        this.resultadoPagamentoCheck2 = document.querySelector('#resultado__pesquisa___pagamento-check-2')
        
        this.botaoProcessaPagamento = document.querySelector('#botao__processa___pagamento-1')
        this.botaoProcessaPagamento2 = document.querySelector('#botao__processa___pagamento-2')
        this.botaoFechaProcessoPagamento = document.querySelector('#botao-fecha__pagamento')
        
        this.formulario = document.querySelector('form')
        
        
        this.botaoProcessaPagamento.addEventListener('click', this.processoConcluidoPagamento.bind(this))
        this.botaoProcessaPagamento2.addEventListener('click', this.processoConcluidoPagamento2.bind(this))
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
    }
    fechaProcesso(){
        const concluidoProcesso = this.modalProcesso
        concluidoProcesso.style.display = ` none ` 
    }




    abrirResultadorPagamento(){
        const resultadoFiltroPagamento = this.resultadoPagamento
        resultadoFiltroPagamento.style.visibility = `visible`
        resultadoFiltroPagamento.style.display = ` block `
        resultadoFiltroPagamento.style.opacity = ` 1 `
    }

    abrirResultadorPagamentoCheck1(){
        const resultadoPagamentoCheck1 = this.resultadoPagamentoCheck1
        const resultadoPagamentoCheck2 = this.resultadoPagamentoCheck2
        
        resultadoPagamentoCheck1.style.visibility = `visible`
        resultadoPagamentoCheck1.style.display = ` block `
        resultadoPagamentoCheck1.style.opacity = ` 1 `
        
        resultadoPagamentoCheck2.style.display = ' none '
        
    }
    abrirResultadorPagamentoCheck2(){
        const resultadoPagamentoCheck1 = this.resultadoPagamentoCheck1
        const resultadoPagamentoCheck2 = this.resultadoPagamentoCheck2
        
        resultadoPagamentoCheck2.style.visibility = `visible`
        resultadoPagamentoCheck2.style.display = ` block `
        resultadoPagamentoCheck2.style.opacity = ` 1 `
        
        resultadoPagamentoCheck1.style.display = ' none '
    }
    processoConcluidoPagamento(){
        const concluidoProcessoPagamento =this.modalProcessoPagamento
        concluidoProcessoPagamento.style.display = ' flex '

        const resultadoPagamentoCheck = this.resultadoPagamentoCheck1
        const resultadoPagamento = this.resultadoPagamento

        const resultadoPagamentoCheck2 = this.resultadoPagamentoCheck2

        resultadoPagamentoCheck.style.display = ` none `
        resultadoPagamento.style.display = ` none `
        resultadoPagamentoCheck2.style.display = ' none '
    }
    processoConcluidoPagamento2(){
        const concluidoProcessoPagamento =this.modalProcessoPagamento
        concluidoProcessoPagamento.style.display = ' flex '

        const resultadoPagamentoCheck = this.resultadoPagamentoCheck1
        const resultadoPagamento = this.resultadoPagamento

        const resultadoPagamentoCheck2 = this.resultadoPagamentoCheck2

        resultadoPagamentoCheck.style.display = ` none `
        resultadoPagamento.style.display = ` none `
        resultadoPagamentoCheck2.style.display = ' none '
    }
    fechaProcessoPagamento(){
        const concluidoProcessoPagamento = this.modalProcessoPagamento
        concluidoProcessoPagamento.style.display = ` none ` 
    }
   

    marcaTodos(){
            const botoesClientes = this.botoesCheckClientes
            botoesClientes.check
          }
    }


