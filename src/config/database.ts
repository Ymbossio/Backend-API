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
  dialect: process.env.DIALECT as 'postgres',  
  host: 'dpg-cri9vm5ds78s73alvms0-a.oregon-postgres.render.com',
  username: 'root',
  password: 'mfCX2hPFWMKErc0W055xhkYOqWBtZ84z',
  port: 5432, 
  database: 'backend_4am0',
  dialectOptions: dialectOptions['postgres'] || {},
  models: [Producto, Transferencia],
  logging: true,
});



export default sequelize;
