import sequelize from '../config/database';
import app from '../index';
import { Server } from 'http'; // Importa Server para usar en el tipo

const PORT = process.env.PORT_SERVER ?? 3000;

let server: Server | undefined; // Define server como opcional

async function startServer(): Promise<Server> {
  try {
    // Sincroniza modelos
    await sequelize.sync();

    server = app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });

    app.get('/', (req, res) => {
      res.send('<h1>This server Run 🚀</h1>');
    });

    return server;
  } catch (error) {
    console.error('Error al conectar o sincronizar la base de datos:', error);
    process.exit(1); // Sale del proceso si hay un error
  }
}

const stopServer = (): Promise<void> => {
  return new Promise((resolve) => {
    if (server) {
      server.close(() => {
        console.log('Servidor cerrado.');
        resolve();
      });
    } else {
      resolve(); // En caso de que `server` no esté definido, simplemente resuelve la promesa
    }
  });
};

export { startServer, stopServer };
