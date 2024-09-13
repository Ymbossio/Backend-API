import { Request, Response } from "express";
import {  getAllPorductsDB } from "../repositories/RepProductos";


export const GetPorductsServices = async () => {
    return await getAllPorductsDB();
}

