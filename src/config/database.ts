import { Sequelize } from 'sequelize-typescript';
import { Producto } from '../model/productos';
import { Transferencia } from '../model/transferencias';
import * as dotenv from 'dotenv';

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
  : {}


const sequelize = new Sequelize({
  dialectOptions: dialectOptions['postgres'] || {},
  dialect: process.env.DIALECT as 'postgres',  
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORT || '8080', 10),  
  database: process.env.DATABASE,
  models: [Producto, Transferencia],
  logging: true,
});



export default sequelize;
