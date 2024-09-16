  import { startServer, stopServer } from '../server/servers';
  import request from 'supertest';
  import { Server } from 'http';
  import app from '../index';
  import sequelize from '../config/database';

  let server: Server;

  beforeAll(async () => {
    await sequelize.sync({ force: true }); // Sincroniza la base de datos
    await startServer(); // Asegúrate de que el servidor esté en marcha
  });

  afterAll(async () => {
    await stopServer(); // Detén el servidor
    await sequelize.close(); // Cierra la conexión con la base de datos
  }, 20000);

  describe('GET /productos', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).get('/productos');
      expect(response.status).toBe(200);
    });
  });
