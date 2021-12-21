
import { Carousel } from "./carrousel.js";
/*import { CarouselPagamento } from "./carrouselServicoPagamento.js";*/
import { Processamento } from "./processamento.js"




const anterior = '[data-anterior]'
const proximo = '[data-proximo]'
const listaClientes = '[data-lista-perfil]'





/*const anteriorPagamento = '[data-anterior-Pagamento]'
const proximoPagamento = '[data-proximo-Pagamento]'
const listaClientesPagamento = '[data-lista-Pagamento]'*/




new Carousel(anterior, proximo, listaClientes)
/*new CarouselPagamento(anteriorPagamento, proximoPagamento, listaClientesPagamento)*/
new Processamento()