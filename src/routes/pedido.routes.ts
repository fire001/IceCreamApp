//ruta de los pedidos 

import { Router } from 'express'
const router = Router();

import { getPedido, createPedido } from '../controllers/controlador.pedido'

router.route('/')
    .get(getPedido)
    .post(createPedido);

export default router;