import { Request, Response } from 'express'
import { getAllProductsServices } from '../services/ServicesProductos';


export const getAllProducts = async (_req: Request, res: Response): Promise<Response> =>{
    try {
        const products = await getAllProductsServices();
        return res.status(200).json(products);

    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
}

