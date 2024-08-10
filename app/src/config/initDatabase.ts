
import { createConnection, getRepository } from 'typeorm';
import { SistemasEstelares } from '../models/starsystems';

async function initializeDatabase() {
  try {
    // Cria a conexão com o banco de dados
    const connection = await createConnection();

    // Obtém o repositório para a entidade SistemasEstelares
    const sistemasRepository = getRepository(SistemasEstelares);

    // Dados a serem inseridos
    const sistemas = [
      'Coruscant',
      'Tatooine',
      'Hoth',
      'Naboo',
      'Endor',
      'Kamino',
      'Geonosis',
      'Mustafar',
      'Dagobah',
      'Yavin',
      'Bespin',
      'Lothal',
      'Dantooine',
      'Felucia',
      'Sullust',
    ];

    // Verifica se já existem dados na tabela
    const existingSystems = await sistemasRepository.find();
    if (existingSystems.length === 0) {
      // Se a tabela estiver vazia, insere os dados
      for (const nome of sistemas) {
        const sistema = new SistemasEstelares();
        sistema.nome = nome;
        sistema.descricao = 'Descrição padrão'; // ou qualquer outra descrição padrão
        await sistemasRepository.save(sistema);
      }
      console.log('Dados iniciais inseridos com sucesso.');
    } else {
      console.log('Dados já existem na tabela SistemasEstelares.');
    }

    // Fecha a conexão
    await connection.close();
  } catch (error) {
    console.error('Erro ao inicializar o banco de dados:', error);
  }
}

// Executa o script de inicialização
initializeDatabase();