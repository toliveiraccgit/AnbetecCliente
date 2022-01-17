export class GerenciaLayout {

    constructor () {
        /*---------------------------CADASTRA-LAYOUT------------------------------*/
        this.botaoCadastraLayout = document.querySelector('#botao-cadastra-layout')
        this.secaoCadastraLayout = document.querySelector('#cadastra-layout')
        this.botaoFechaCadastraLayout = document.querySelector('#botao__fecha___cadastra-layout')

        this.botaoCadastraLayout.addEventListener('click', this.abrirCadastraLayout.bind(this))
        this.botaoFechaCadastraLayout.addEventListener('click', this.fechaCadastraLayout.bind(this))
        
        
        /*---------------------------GERENCIA-VARIAVEL------------------------------*/    
        this.botaoGerenciaVariavel = document.querySelector('#botao-gerencia-variavel')
        this.secaoGerenciaVariavel = document.querySelector('#gerencia-variavel')
        this.botaoFechaGerenciaVariavel = document.querySelector('#botao__fecha___gerencia-variavel')

        this.botaoGerenciaVariavel.addEventListener('click', this.abrirGerenciaVariavel.bind(this))
        this.botaoFechaGerenciaVariavel.addEventListener('click', this.fechaGerenciaVariavel.bind(this))
    }
    /*---------------------------CADASTRA-LAYOUT------------------------------*/
    abrirCadastraLayout(){ 
        const SecaoCadastraLayout = this.secaoCadastraLayout
        SecaoCadastraLayout.style.display = ` block `
        SecaoCadastraLayout.style.visibility = `visible`
        SecaoCadastraLayout.style.opacity = ` 1 ` 
    }
    fechaCadastraLayout(){ 
        const SecaoCadastraLayout = this.secaoCadastraLayout
        SecaoCadastraLayout.style.display = ` none `
        SecaoCadastraLayout.style.visibility = `hidden`
        SecaoCadastraLayout.style.opacity = ` 0 ` 
    }
    /*-------------------------GERENCIA-VARIAVEL----------------------------*/    
    abrirGerenciaVariavel(){ 
        const SecaoGerenciaVariavel = this.secaoGerenciaVariavel
        SecaoGerenciaVariavel.style.display = ` flex `
        SecaoGerenciaVariavel.style.visibility = `visible`
        SecaoGerenciaVariavel.style.opacity = ` 1 ` 
    }
    fechaGerenciaVariavel(){ 
        const SecaoGerenciaVariavel = this.secaoGerenciaVariavel
        SecaoGerenciaVariavel.style.display = ` none `
        SecaoGerenciaVariavel.style.visibility = `hidden`
        SecaoGerenciaVariavel.style.opacity = ` 0 ` 
    }
}