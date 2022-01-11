export class ConfiguraçãoCobranca {

    constructor () {
        this.botaoConfiguracoesCobranca = document.querySelector('#botao__configura-cobranca')
        this.secaoConfiguracaoCobranca = document.querySelector('#configuracoes-cobranca')
        this.botaoFechaConfiguracaoCobranca = document.querySelector('#botao__fecha___configuracoes-cobranca')
        this.botaoAbriEmail = document.querySelector('#input-email-radio-remessa')
        this.containerEmail = document.querySelector('#container-input-email-remessa')

        this.botaoAbriEmail.addEventListener('click', this.abrirEmailRemessa.bind(this))
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

}