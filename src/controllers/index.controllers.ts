import {Request, Response} from 'express'


export function indexIceList (req: Request, res: Response): Response {
    return res.json('Ice Cream List')
};