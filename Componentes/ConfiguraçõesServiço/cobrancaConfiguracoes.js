export class ConfiguraçãoCobranca {

    constructor () {
        /*---------------------------COBRANCA------------------------------*/
        this.botaoConfiguracoesCobranca = document.querySelector('#botao__configura-cobranca')
        this.secaoConfiguracaoCobranca = document.querySelector('#configuracoes-cobranca')
        this.botaoFechaConfiguracaoCobranca = document.querySelector('#botao__fecha___configuracoes-cobranca')
        
        this.botaoAbriEmail = document.querySelector('#input-email-radio-remessa')
        this.containerEmail = document.querySelector('#container-input-email-remessa')

        this.botaoVinculaConta = document.querySelector('#botao-vincula-conta-retorno')
        this.secaoContasVinculadas = document.querySelector('#secao-contas-vinculadas')

        this.botaoAbreEmailRetorno = document.querySelector('#input-abre-email-retorno')
        this.containerEmailRetorno = document.querySelector('#container-input-email-retorno')

        this.botaoAbreEmailRetorno.addEventListener('click', this.abrirEmailRetorno.bind(this))

        this.botaoVinculaConta.addEventListener('click', this.abrirListaContaVinculadas.bind(this))

        this.botaoAbriEmail.addEventListener('click', this.abrirEmailRemessa.bind(this))
        
        this.botaoConfiguracoesCobranca.addEventListener('click', this.abrirConfiguracaoCobranca.bind(this))
        
        this.botaoFechaConfiguracaoCobranca.addEventListener('click', this.fechaConfiguracaoCobranca.bind(this))
        
        
        /*--------------------------PAGAMENTO------------------------------*/

        this.botaoConfiguracoesPagamento = document.querySelector('#botao__configura-pagamento')
        this.secaoConfiguracaoPagamento = document.querySelector('#configuracoes-pagamento')
        this.botaoFechaConfiguracaoPagamento = document.querySelector('#botao__fecha___configuracoes-pagamento')

        this.botaoAbriEmailPagamento = document.querySelector('#input-email-radio-pagamento')
        this.containerEmailPagamento = document.querySelector('#container-input-email-pagamento')

        this.botaoAbriEmailPagamento.addEventListener('click', this.abrirEmailPagamento.bind(this))
        
        this.botaoConfiguracoesPagamento.addEventListener('click', this.abrirConfiguracaoPagamento.bind(this))
        
        this.botaoFechaConfiguracaoPagamento.addEventListener('click', this.fechaConfiguracaoPagamento.bind(this))


        /*--------------------------EXTRATO------------------------------*/

        this.botaoConfiguracoesExtrato = document.querySelector('#botao__configura-extrato')
        this.secaoConfiguracaoExtrato = document.querySelector('#configuracoes-extrato')
        this.botaoFechaConfiguracaoExtrato = document.querySelector('#botao__fecha___configuracoes-extrato')

        this.botaoAbriEmailExtrato = document.querySelector('#input-email-radio-extrato')
        this.containerEmailExtrato = document.querySelector('#container-input-email-extrato')

        this.botaoAbriEmailExtrato.addEventListener('click', this.abrirEmailExtrato.bind(this))
        
        this.botaoConfiguracoesExtrato.addEventListener('click', this.abrirConfiguracaoExtrato.bind(this))
        
        this.botaoFechaConfiguracaoExtrato.addEventListener('click', this.fechaConfiguracaoExtrato.bind(this))

        /*--------------------------DDA------------------------------*/

        this.botaoConfiguracoesDDA = document.querySelector('#botao__configura-dda')
        this.secaoConfiguracaoDDA = document.querySelector('#configuracoes-dda')
        this.botaoFechaConfiguracaoDDA = document.querySelector('#botao__fecha___configuracoes-dda')

        this.botaoAbriEmailDDA = document.querySelector('#input-email-radio-dda')
        this.containerEmailDDA = document.querySelector('#container-input-email-dda')

        this.botaoAbriEmailDDA.addEventListener('click', this.abrirEmailDDA.bind(this))
        
        this.botaoConfiguracoesDDA.addEventListener('click', this.abrirConfiguracaoDDA.bind(this))
        
        this.botaoFechaConfiguracaoDDA.addEventListener('click', this.fechaConfiguracaoDDA.bind(this))
    }
    /*---------------------------COBRANCA------------------------------*/
    abrirConfiguracaoCobranca(){ 
        const configuracaoCobranca = this.secaoConfiguracaoCobranca
        configuracaoCobranca.style.display = ` block `
        configuracaoCobranca.style.visibility = `visible`
        configuracaoCobranca.style.opacity = ` 1 ` 
    }
    fechaConfiguracaoCobranca(){ 
        const configuracaoCobranca = this.secaoConfiguracaoCobranca
        configuracaoCobranca.style.display = ` none `
        configuracaoCobranca.style.visibility = `hidden`
        configuracaoCobranca.style.opacity = ` 0 ` 
    }
    abrirEmailRemessa(){
        const containerEmail = this.containerEmail
        const botaoAbriEmail = this.botaoAbriEmail

        
        if(botaoAbriEmail.checked == true ){
            containerEmail.style.visibility = ` visible `
            containerEmail.style.opacity = ` 1 `
        }else{
            containerEmail.style.visibility = ` hidden `
            containerEmail.style.opacity = ` 0 `
        }
         

    }
    abrirEmailRetorno(){
        const containerEmailRetorno = this.containerEmailRetorno
        const botaoAbriEmailRetorno = this.botaoAbreEmailRetorno

        
        if(botaoAbriEmailRetorno.checked == true ){
            containerEmailRetorno.style.visibility = ` visible `
            containerEmailRetorno.style.opacity = ` 1 `
            containerEmailRetorno.style.display = ` flex `
        }else{
            containerEmailRetorno.style.visibility = ` hidden `
            containerEmailRetorno.style.opacity = ` 0 `
            containerEmailRetorno.style.display = ` none `
        }
         

    }
    abrirListaContaVinculadas(){
        const secaoContasVinculadas = this.secaoContasVinculadas

        secaoContasVinculadas.style.display = ` flex `
    }

    /*---------------------------PAGAMENTO------------------------------*/
    abrirConfiguracaoPagamento(){ 
        const configuracaoPagamento = this.secaoConfiguracaoPagamento
        configuracaoPagamento.style.display = ` block `
        configuracaoPagamento.style.visibility = `visible`
        configuracaoPagamento.style.opacity = ` 1 ` 
    }
    fechaConfiguracaoPagamento(){ 
        const configuracaoPagamento = this.secaoConfiguracaoPagamento
        configuracaoPagamento.style.display = ` none `
        configuracaoPagamento.style.visibility = `hidden`
        configuracaoPagamento.style.opacity = ` 0 ` 
    }

    abrirEmailPagamento(){
        const containerEmailPagamento = this.containerEmailPagamento
        const botaoAbriEmailPagamento = this.botaoAbriEmailPagamento

        
        if(botaoAbriEmailPagamento.checked == true ){
            containerEmailPagamento.style.visibility = ` visible `
            containerEmailPagamento.style.opacity = ` 1 `
        }else{
            containerEmailPagamento.style.visibility = ` hidden `
            containerEmailPagamento.style.opacity = ` 0 `
        }
         

    }


    /*---------------------------EXTRATO------------------------------*/
    abrirConfiguracaoExtrato(){ 
        const configuracaoExtrato = this.secaoConfiguracaoExtrato
        configuracaoExtrato.style.display = ` block `
        configuracaoExtrato.style.visibility = `visible`
        configuracaoExtrato.style.opacity = ` 1 ` 
    }
    fechaConfiguracaoExtrato(){ 
        const configuracaoExtrato = this.secaoConfiguracaoExtrato
        configuracaoExtrato.style.display = ` none `
        configuracaoExtrato.style.visibility = `hidden`
        configuracaoExtrato.style.opacity = ` 0 ` 
    }

    abrirEmailExtrato(){
        const containerEmailExtrato = this.containerEmailExtrato
        const botaoAbriEmailExtrato = this.botaoAbriEmailExtrato

        
        if(botaoAbriEmailExtrato.checked == true ){
            containerEmailExtrato.style.visibility = ` visible `
            containerEmailExtrato.style.opacity = ` 1 `
        }else{
            containerEmailExtrato.style.visibility = ` hidden `
            containerEmailExtrato.style.opacity = ` 0 `
        }
         

    }


    /*---------------------------DDA------------------------------*/
    abrirConfiguracaoDDA(){ 
        const configuracaoDDA = this.secaoConfiguracaoDDA
        configuracaoDDA.style.display = ` block `
        configuracaoDDA.style.visibility = `visible`
        configuracaoDDA.style.opacity = ` 1 ` 
    }
    fechaConfiguracaoDDA(){ 
        const configuracaoDDA = this.secaoConfiguracaoDDA
        configuracaoDDA.style.display = ` none `
        configuracaoDDA.style.visibility = `hidden`
        configuracaoDDA.style.opacity = ` 0 ` 
    }

    abrirEmailDDA(){
        const containerEmailDDA = this.containerEmailDDA
        const botaoAbriEmailDDA = this.botaoAbriEmailDDA

        
        if(botaoAbriEmailDDA.checked == true ){
            containerEmailDDA.style.visibility = ` visible `
            containerEmailDDA.style.opacity = ` 1 `
            containerEmailDDA.style.display = ` block `
        }else{
            containerEmailDDA.style.visibility = ` hidden `
            containerEmailDDA.style.opacity = ` 0 `
            containerEmailDDA.style.display = ` none `
        }
         

    }
}