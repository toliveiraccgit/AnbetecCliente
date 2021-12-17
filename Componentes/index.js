import { CarouselDDA } from "./carrouselDDA.js";
import { Carousel } from "./carrousel.js";
import { CarouselPagamento } from "./carrouselServicoPagamento.js";


const anterior = '[data-anterior]'
const proximo = '[data-proximo]'
const listaClientes = '[data-lista-perfil]'
new Carousel(anterior, proximo, listaClientes)




const anteriorPagamento = '[data-anterior-Pagamento]'
const proximoPagamento = '[data-proximo-Pagamento]'
const listaClientesPagamento = '[data-lista-perfil-Pagamento]'
new CarouselPagamento(anteriorPagamento, proximoPagamento, listaClientesPagamento)


const anteriorDDA = '[data-anterior-dda]'
const proximoDDA = '[data-proximo-dda]'
const listaClientesDDA = '[data-lista-dda]'
new CarouselDDA(anteriorDDA, proximoDDA, listaClientesDDA)