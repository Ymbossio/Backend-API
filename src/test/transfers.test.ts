import { startServer, stopServer } from '../server/servers';
import request from 'supertest';
import { Server } from 'http';
import app from '../index';
import sequelize from '../config/database';

let server: Server;

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Sincroniza db
  await startServer();
});

afterAll(async () => {
  await stopServer(); // Detén el servidor
  await sequelize.close(); // Cierra la conexión con la base de datos
}, 60000);


describe('POST /transaction', () => {
  test('should respond with a 200 status code', async () => {

    const nuevaTransfer = {
        transaction_id: "193526-1711054232-47541",
        amount_in_cents: 4590000,
        reference: "SUETERS-BLACK-237868523-13-09-2024",
        customer_email: "prueba-test@gmail.com",
        currency: "COP",
      };

    const response = await request(app)
    .post('/transaction')
    .send(nuevaTransfer)
    .expect('Content-Type', /json/)
    .expect(200);

    expect(response.status).toBe(200);
  }, 30000);
});
