import { Sequelize } from 'sequelize-typescript';
import { Producto } from '../model/productos';
import {Transferencia} from '../model/transferencias'

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123',
  port: 5433,
  database: 'backend-api',
  models: [Producto, Transferencia],
  logging: false,
});

export default sequelize;
