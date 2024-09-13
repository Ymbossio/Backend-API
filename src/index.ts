import express from 'express';
import router from './routes/index';
import product from './routes/productos';
import cors from 'cors';
import sequelize from './config/database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(product);



const PORT = process.env.PORT_SERVER || 8080;

async function startServer() {
  try {
    // Sincroniza modelos
    await sequelize.sync();

    const server = app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });

    return server;
  } catch (error) {
    console.error('Error al conectar o sincronizar la base de datos:', error);
    process.exit(1); // Sale del proceso si hay un error
  }
}

if (require.main === module) {
  startServer();
}


export default app;
