export class CarouselPagamento2 {
    constructor(anteriorPagamento2, proximoPagamento2, listaClientesPagamento2) {
        this.anteriorPagamento2 = document.querySelector(anteriorPagamento2)
        this.proximoPagamento2 = document.querySelector(proximoPagamento2)
        this.listaClientesPagamento2 = document.querySelector(listaClientesPagamento2)

        this.slides = this.getListaSlides()
        this.tamanhoSlide = this.getTamanhoSlide()

        this.indiceDoSlideAtual = 0

        this.proximoPagamento2.addEventListener('click', this.proximoSlide.bind(this))

        this.anteriorPagamento2.addEventListener('click', this.slideAnterior.bind(this))

        this.preparaSlides()
    }

    getListaSlides() {
        return Array.from(this.listaClientesPagamento2.children)
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
        this.listaClientesPagamento2.style.transform = 'translateX(-' + slideSelecionado.style.left + ')'

    }

    preparaSlides() {
        this.slides.forEach((slide, i) => {
            slide.style.left = this.tamanhoSlide * i + 'px'
        })
    }
}