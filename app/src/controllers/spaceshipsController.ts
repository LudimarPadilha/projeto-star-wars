//Importando bibliotecas e dependecias.
import { Request, Response } from 'express';
import { AppDataSource } from '../dataSource';
import { Nave } from '../models/spaceships';

//Criar uma Nave
export const createNave = async (req: Request, res: Response) => {
  try {
    const naveRepository = AppDataSource.getRepository(Nave);
    const nave = naveRepository.create(req.body);
    await naveRepository.save(nave);
    res.status(201).json(nave);
  } catch (error) {
    res.status(400).json({ error: 'Error ao criar a Nave' });
  }
};

//Consultar todas as Naves
export const getNave = async (req: Request, res: Response) => {
  try {
    const naveRepository = AppDataSource.getRepository(Nave);
    const nave = await naveRepository.find();
    res.status(200).json(nave);
  } catch (error) {
    res.status(500).json({ error: 'Error ao consultar as Naves' });
  }
};

//Consultar uma Nave pelo Id
export const getNaveId = async (req: Request, res: Response) => {
  try {
    const naveRepository = AppDataSource.getRepository(Nave);
    const nave = await naveRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!nave) return res.status(404).json({ error: 'Nave não encontrada' });
    res.status(200).json(nave);
  } catch (error) {
    res.status(500).json({ error: 'Error ao consultar a Nave' });
  }
};

//Atualizar as informações de uma Nave pelo Id
export const updateNave = async (req: Request, res: Response) => {
  try {
    const naveRepository = AppDataSource.getRepository(Nave);
    const nave = await naveRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!nave) return res.status(404).json({ error: 'Nave não encontrada' });
    naveRepository.merge(nave, req.body);
    await naveRepository.save(nave);
    res.status(200).json(nave);
  } catch (error) {
    res.status(400).json({ error: 'Error ao atualizar as informações da Nave' });
  }
};
//Deletar uma Nave
export const deleteNave = async (req: Request, res: Response) => {
  try {
    const naveRepository = AppDataSource.getRepository(Nave);
    const nave = await naveRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!nave) return res.status(404).json({ error: 'Nave não encontrada' });
    await naveRepository.remove(nave);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error ao deletar a Nave' });
  }
};
