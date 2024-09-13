"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const productos_1 = require("../model/productos");
const transferencias_1 = require("../model/transferencias");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123',
    port: 5433,
    database: 'backend-api',
    models: [productos_1.Producto, transferencias_1.Transferencia],
    logging: false,
});
exports.default = sequelize;
