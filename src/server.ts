import app from "../src/index";
import sequelize from './config/database';

const PORT = process.env.PORT_SERVER ?? 3000;

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

export { startServer };