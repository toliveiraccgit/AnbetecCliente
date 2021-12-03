import { Carousel } from "./carrousel.js";
import { Processamento } from "./processamento.js";

const anterior = '[data-anterior]'
const proximo = '[data-proximo]'
const listaProdutos = '[data-lista-perfil]'

new Processamento()
new Carousel(anterior, proximo, listaProdutos)