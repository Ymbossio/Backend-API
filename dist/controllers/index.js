"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Update = exports.Create = exports.GetOne = void 0;
const database_1 = __importDefault(require("../database"));
const express_1 = __importDefault(require("express"));
//importamos los servicios .
const GetAll_1 = require("../dominio/servicio/GetAll");
const router = (0, express_1.default)();
router.get('/transantion', GetAll_1.GetAll);
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

¨*/
const GetOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.default.query('SELECT * FROM transferencias WHERE id=$1', [id]);
        return res.json(response.rows);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
});
exports.GetOne = GetOne;
const Create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre } = req.body;
        const response = yield database_1.default.query('INSERT INTO transferencias (nombre) VALUES ($1)', [nombre]);
        return res.json({ message: "¡¡Create successfull!!" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
});
exports.Create = Create;
const Update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { nombre } = req.body;
        yield database_1.default.query('UPDATE transferencias SET nombre = $1 WHERE id=$2', [nombre, id]);
        return res.json({ message: "Update successfully" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
});
exports.Update = Update;
const Delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield database_1.default.query('DELETE FROM transferencias WHERE id=$1', [id]);
        return res.json({ message: "Delete successfully" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }
});
exports.Delete = Delete;
