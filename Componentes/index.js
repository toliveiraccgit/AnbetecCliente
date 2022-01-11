import { Carousel } from "./carrousel.js";

import { Processamento } from "./processamento.js"




const anterior = '[data-anterior]'
const proximo = '[data-proximo]'
const listaClientes = '[data-lista-perfil]'




new Carousel(anterior, proximo, listaClientes)
console.log(anterior, proximo, listaClientes)
new Processamento()

