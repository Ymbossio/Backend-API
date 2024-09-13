"use strict";
/*import pool from '../../database';
import { QueryResult } from 'pg';


export const getAllPorductsDB = async (): Promise<QueryResult> => {
    return await pool.query('SELECT * FROM productos');
};
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPorductsDB = void 0;
const productos_1 = require("../../model/productos");
const getAllPorductsDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield productos_1.Producto.findAll();
        return productos;
    }
    catch (error) {
        throw new Error('Error al obtener productos: ' + error);
    }
});
exports.getAllPorductsDB = getAllPorductsDB;
