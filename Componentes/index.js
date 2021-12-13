import { CarouselDDA } from "./carrouselDDA.js";
import { CarouselCobranca } from "./carrouselServicoCobranca.js";
import { CarouselPagamento } from "./carrouselServicoPagamento.js";

import { Processamento } from "./processamento.js";
/*import { ProcessamentoDDA } from "./processamentoDDA.js";*/


const anteriorPagamento = '[data-anterior-Pagamento]'
const proximoPagamento = '[data-proximo-Pagamento]'
const listaClientesPagamento = '[data-lista-perfil-Pagamento]'

const anteriorCobranca = '[data-anterior-Cobranca]'
const proximoCobranca = '[data-proximo-Cobranca]'
const listaClientesCobranca = '[data-lista-perfil-Cobranca]'

const anteriorDDA = '[data-anterior-dda]'
const proximoDDA = '[data-proximo-dda]'
const listaClientesDDA = '[data-lista-dda]'

new Processamento()
/*new ProcessamentoDDA()*/

new CarouselCobranca(anteriorCobranca, proximoCobranca, listaClientesCobranca)
new CarouselPagamento(anteriorPagamento, proximoPagamento, listaClientesPagamento)
new CarouselDDA(anteriorDDA, proximoDDA, listaClientesDDA)