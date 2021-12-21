export class Carousel {
    constructor(anterior, proximo, listaClientes) {
        this.anterior = document.querySelector(anterior)
        this.proximo = document.querySelector(proximo)
        this.listaClientes = document.querySelector(listaClientes)

        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        

        this.anterior.addEventListener('click', this.slideAnterior.bind(this))
        this.proximo.addEventListener('click', this.proximoSlide.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaClientes.children)
    }

    getTamanhoSlide() {
        return this.slides[0].getBoundingClientRect().width 
    }

    getSlideAtual() {
        return this.slides[this.indiceDoSlideAtual]
    }

    proximoSlide() {
        let proximaPosicao = this.indiceDoSlideAtual + 1
        if (proximaPosicao > this.slides.length - 1) {
            proximaPosicao = 0
        }

        this.vaParaSlide(proximaPosicao)
    }

    slideAnterior() {
        let posicaoAnterior = this.indiceDoSlideAtual - 1
        if (posicaoAnterior < 0) {
            posicaoAnterior = this.slides.length - 1
        }

        this.vaParaSlide(posicaoAnterior)
    }

    vaParaSlide(posicao) {
        this.indiceDoSlideAtual = posicao

        this.scrollParaSlide(this.getSlideAtual())
    }

    scrollParaSlide(slideSelecionado) {
        this.listaClientes.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

    }

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}