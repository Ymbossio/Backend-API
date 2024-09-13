// src/test/transferencias.test.ts
import request from 'supertest';
import app from '../index'; // Ajusta la ruta según tu estructura
import crypto from 'crypto';
import  mockTransactionData  from '../mock/simulatedata';
import { Sequelize } from 'sequelize-typescript';
import { Transferencia } from '../model/transferencias';


const sequelizeTest = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123',
  port: 5433,
  database: 'backend-api',
  models: [Transferencia],
  logging: false,
});

beforeAll(async () => {
  await sequelizeTest.sync({ force: true }); // Crea tablas en la base de datos en memoria
});

afterAll(async () => {
  await sequelizeTest.close(); // Cierra la conexión al finalizar las pruebas
});

describe('Rutas de Transferencias', () => {
  describe('POST /transation', () => {
    it('debería crear una nueva transferencia con los datos proporcionados', async () => {
      // Calcular el checksum esperado
      const validator = `${mockTransactionData.transaction_id}${mockTransactionData.status}${mockTransactionData.amount_in_cents}${mockTransactionData.timestamp}${process.env.EVENT_INTEGRATION}`;
      const expectedChecksum = crypto.createHash('sha256').update(validator).digest('hex');

      const response = await request(app)
        .post('/transation')
        .send({
          ...mockTransactionData,
          checksum: expectedChecksum, // Incluir el checksum esperado
        });

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({ message: "Create successful!" });
    });
  });

  
});
