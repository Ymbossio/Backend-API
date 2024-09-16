import sequelize from '../config/database';
import app from '../index';


const PORT = process.env.PORT_SERVER ?? 3000;

async function startServer() {
    try {
      // Sincroniza modelos
      await sequelize.sync();
  
      const server = app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
      });
  
  
      app.get('/', (req, res)=>{
        res.send('<h1>This server Run 🚀</h1>');
      })
  
      return server;
    } catch (error) {
      console.error('Error al conectar o sincronizar la base de datos:', error);
      process.exit(1); // Sale del proceso si hay un error
    }
  }
  
  if (require.main === module) {
    startServer();
  }

export default startServer;