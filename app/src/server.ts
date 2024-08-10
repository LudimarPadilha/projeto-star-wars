import app from './app';
import { AppDataSource } from './dataSource'; // Corrigido o caminho para dataSources

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    // Inicializar DataSource
    await AppDataSource.initialize();
    console.log('inicilizando o DataSource!');

    // Iniciar o servidor
    app.listen(PORT, () => {
      console.log(`Servidor está rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro durante a inicialização do Data Source:', error);
    process.exit(1); // Encerra o processo com código de erro
  }
};

startServer();
