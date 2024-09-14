import {  getAllProductsDB } from "../repositories/RepProductos";


export const getAllProductsServices = async () => {
    return await getAllProductsDB();
}

