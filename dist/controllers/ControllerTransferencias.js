"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//importamos los servicios .
const ServicesTransferencias_1 = require("../dominio/servicio/ServicesTransferencias");
const router = (0, express_1.default)();
router.get('/transantion', ServicesTransferencias_1.GetAll);
exports.default = router;
/*
export const GetAll = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const response: QueryResult = await pool.query('SELECT * FROM transferencias');
        return res.status(200).json(response.rows);

    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
}

¨

export const GetOne = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const id = parseInt(req.params.id)
        const response: QueryResult = await pool.query('SELECT * FROM transferencias WHERE id=$1', [id]);
        return res.json(response.rows)
    }catch(error){
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
}


export const Create = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const { nombre } = req.body;
        const response: QueryResult = await pool.query('INSERT INTO transferencias (nombre) VALUES ($1)', [nombre]);
        return res.json({ message: "¡¡Create successfull!!"});

    }catch(error){
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
}


export const Update = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const id = parseInt(req.params.id)
        const { nombre } = req.body;
        await pool.query('UPDATE transferencias SET nombre = $1 WHERE id=$2', [nombre, id]);
        return res.json({message: "Update successfully"})

    }catch(error){
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
}



export const Delete = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const id = parseInt(req.params.id)
        const response: QueryResult = await pool.query('DELETE FROM transferencias WHERE id=$1', [id]);
        return res.json({message: "Delete successfully"})

    }catch(error){
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
}
    
*/ 
