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
// src/test/transferencias.test.ts
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index")); // Ajusta la ruta según tu estructura
const crypto_1 = __importDefault(require("crypto"));
const simulatedata_1 = __importDefault(require("../mock/simulatedata"));
const sequelize_typescript_1 = require("sequelize-typescript");
const transferencias_1 = require("../model/transferencias");
const sequelizeTest = new sequelize_typescript_1.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123',
    port: 5433,
    database: 'backend-api',
    models: [transferencias_1.Transferencia],
    logging: false,
});
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelizeTest.sync({ force: true }); // Crea tablas en la base de datos en memoria
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelizeTest.close(); // Cierra la conexión al finalizar las pruebas
}));
describe('Rutas de Transferencias', () => {
    describe('POST /transation', () => {
        it('debería crear una nueva transferencia con los datos proporcionados', () => __awaiter(void 0, void 0, void 0, function* () {
            // Calcular el checksum esperado
            const validator = `${simulatedata_1.default.transaction_id}${simulatedata_1.default.status}${simulatedata_1.default.amount_in_cents}${simulatedata_1.default.timestamp}${process.env.EVENT_INTEGRATION}`;
            const expectedChecksum = crypto_1.default.createHash('sha256').update(validator).digest('hex');
            const response = yield (0, supertest_1.default)(index_1.default)
                .post('/transation')
                .send(Object.assign(Object.assign({}, simulatedata_1.default), { checksum: expectedChecksum }));
            expect(response.status).toBe(200);
            expect(response.body).toMatchObject({ message: "Create successful!" });
        }));
    });
});
