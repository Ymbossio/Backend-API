import {Request, Response} from 'express'
import { getAllProductsServices } from '../servicio/ServicesProductos';


export const getAllProducts = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const productos = await getAllProductsServices();
        return res.status(200).json(productos);

    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
}

