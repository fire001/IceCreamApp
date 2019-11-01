// controlador de los ordersPacks
import {Request, Response} from 'express'
// import database
import {connect} from '../database'
import { OrdersPack } from '../interface/pedido'

export async function getPedido(req: Request,  res: Response): Promise <Response> {
    const con = await connect();
    const pedido = await con.query('SELECT * FROM OrdersPack');
    return res.json(pedido[0]);
};

export async function createPedido(req:Request, res: Response) {
    const newPedido: OrdersPack = req.body;
    return res.json({
        message: 'pedido creado'
    });

}