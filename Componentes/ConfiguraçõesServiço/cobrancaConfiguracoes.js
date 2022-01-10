export class ConfiguraçãoCobranca {

    constructor () {
        this.botaoConfiguracoesCobranca = document.querySelector('#botao__configura-cobranca')
        this.secaoConfiguracaoCobranca = document.querySelector('#configuracoes-cobranca')
        this.botaoFechaConfiguracaoCobranca = document.querySelector('#botao__fecha___configuracoes-cobranca')

        this.botaoConfiguracoesCobranca.addEventListener('click', this.abrirConfiguracaoCobranca.bind(this))
        this.botaoFechaConfiguracaoCobranca.addEventListener('click', this.fechaConfiguracaoCobranca.bind(this))
    }

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

}