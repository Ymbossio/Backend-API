"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const productos_1 = require("../model/productos");
const transferencias_1 = require("../model/transferencias");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const dialectOptions = process.env.NODE_ENV !== 'development'
    ? {
        postgres: {
            ssl: {
                require: true,
                rejectUnauthorized: false // Permitir certificados autofirmados
            }
        }
    }
    : {};
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    port: parseInt(process.env.PORT || '5433', 10),
    database: process.env.DATABASE,
    dialectOptions: dialectOptions['postgres'] || {},
    models: [productos_1.Producto, transferencias_1.Transferencia],
    logging: true,
});
exports.default = sequelize;
