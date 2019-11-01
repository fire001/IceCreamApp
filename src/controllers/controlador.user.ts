//controlador de usuarios

import {Request, Response} from 'express'
import {connect} from '../database'
import { Users } from '../interface/pedido'

export async function getPedido(req: Request,  res: Response): Promise <Response> {
    const con = await connect();
    const pedido = await con.query('SELECT * FROM Users');
    return res.json(pedido[0]);
};

export async function createPedido(req:Request, res: Response) {
    const newPedido: Users = req.body;
    return res.json({
        message: 'pedido creado'
    });

}