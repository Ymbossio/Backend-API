import request from 'supertest';
import { startServer } from '../server';

let server: any;

beforeAll(async () => {
  server = await startServer();
});

afterAll(async () => {
  await server.close(); 
});

describe('GET /productos', () => {
  it('should respond with a 200 status code', async () => {
    const response = await request(server).get('/productos');
    expect(response.status).toBe(200);
  });
});
