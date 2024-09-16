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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const index_1 = __importDefault(require("../index"));
const PORT = (_a = process.env.PORT_SERVER) !== null && _a !== void 0 ? _a : 3000;
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Sincroniza modelos
            yield database_1.default.sync();
            const server = index_1.default.listen(PORT, () => {
                console.log(`Servidor corriendo en el puerto ${PORT}`);
            });
            index_1.default.get('/', (req, res) => {
                res.send('<h1>This server Run 🚀</h1>');
            });
            return server;
        }
        catch (error) {
            console.error('Error al conectar o sincronizar la base de datos:', error);
            process.exit(1); // Sale del proceso si hay un error
        }
    });
}
if (require.main === module) {
    startServer();
}
exports.default = startServer;
