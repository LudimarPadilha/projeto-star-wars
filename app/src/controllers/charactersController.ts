//importando bibliotecas e dependencias.
import { Request, Response } from 'express';
import { AppDataSource } from '../dataSource';
import { Personagens } from '../models/characters';

// Criar um Personagem
export const createPersonagem = async (req: Request, res: Response) => {
  try {
    const personagemRepository = AppDataSource.getRepository(Personagens);
    const personagem = personagemRepository.create(req.body);
    await personagemRepository.save(personagem);
    res.status(201).json(personagem);
  } catch (error) {
    res.status(400).json({ error: 'Error ao criar o Personagem' });
  }
};

// Consultar todos os Personagens
export const getPersonagem = async (req: Request, res: Response) => {
  try {
    const personagemRepository = AppDataSource.getRepository(Personagens);
    const personagens = await personagemRepository.find();
    res.status(200).json(personagens);
  } catch (error) {
    res.status(500).json({ error: 'Error ao consultar os Personagens' });
  }
};

// Consultar um Personagem pelo Id
export const getPersonagemId = async (req: Request, res: Response) => {
  try {
    const personagemRepository = AppDataSource.getRepository(Personagens);
    const personagem = await personagemRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!personagem) return res.status(404).json({ error: 'Personagem não encontrado' });
    res.status(200).json(personagem);
  } catch (error) {
    res.status(500).json({ error: 'Error ao consultar Personagem' });
  }
};

// Atualizar informações de um Personagem pelo id
export const updatePersonagem = async (req: Request, res: Response) => {
  try {
    const personagemRepository = AppDataSource.getRepository(Personagens);
    const personagem = await personagemRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!personagem) return res.status(404).json({ error: 'Personagem não encontrado' });
    personagemRepository.merge(personagem, req.body);
    await personagemRepository.save(personagem);
    res.status(200).json(personagem);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar as informações do Personagem' });
  }
};

// Deletar um Personagem
export const deletePersonagem = async (req: Request, res: Response) => {
  try {
    const personagemRepository = AppDataSource.getRepository(Personagens);
    const personagem = await personagemRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!personagem) return res.status(404).json({ error: 'Personagem não encontrado' });
    await personagemRepository.remove(personagem);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar o Personagem' });
  }
};