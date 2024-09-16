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
const servers_1 = require("../server/servers");
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const database_1 = __importDefault(require("../config/database"));
let server;
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield database_1.default.sync({ force: true }); // Sincroniza db
    yield (0, servers_1.startServer)();
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, servers_1.stopServer)(); // Detén el servidor
    yield database_1.default.close(); // Cierra la conexión con la base de datos
}), 60000);
describe('POST /transaction', () => {
    test('should respond with a 200 status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const nuevaTransfer = {
            transaction_id: "193526-1711054232-47541",
            amount_in_cents: 4590000,
            reference: "SUETERS-BLACK-237868523-13-09-2024",
            customer_email: "prueba-test@gmail.com",
            currency: "COP",
        };
        const response = yield (0, supertest_1.default)(index_1.default)
            .post('/transaction')
            .send(nuevaTransfer)
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.status).toBe(200);
    }), 30000);
});
