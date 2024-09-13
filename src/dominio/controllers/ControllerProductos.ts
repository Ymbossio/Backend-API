import {Request, Response} from 'express'
import { QueryResult } from 'pg';
import { GetPorductsServices } from '../servicio/ServicesProductos';


export const GetAllProducts = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const productos = await GetPorductsServices();
        return res.status(200).json(productos);

    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
}

