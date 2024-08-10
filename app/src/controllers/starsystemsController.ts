//Importando bibliotecas e dependencias.
import { Request, Response } from 'express';
import { AppDataSource } from '../dataSource';
import { SistemasEstelares } from '../models/starsystems';

// Criar um Sistema Solar
export const createEstelar = async (req: Request, res: Response) => {
  try {
    const estelarRepository = AppDataSource.getRepository(SistemasEstelares);
    const estelar = estelarRepository.create(req.body);
    await estelarRepository.save(estelar);
    res.status(201).json(estelar);
  } catch (error) {
    res.status(400).json({ error: 'Error ao criar o Sistema Solar' });
  }
};

// Consultar todos os Sistema Solar
export const getEstelar = async (req: Request, res: Response) => {
  try {
    const estelarRepository = AppDataSource.getRepository(SistemasEstelares);
    const estelar = await estelarRepository.find();
    res.status(200).json(estelar);
  } catch (error) {
    res.status(500).json({ error: 'Error ao consultar o Sistema Solar' });
  }
};

// Consultar um Sistema Solar pelo id
export const getEstelarId = async (req: Request, res: Response) => {
  try {
    const estelarRepository = AppDataSource.getRepository(SistemasEstelares);
    const estelar = await estelarRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!estelar) return res.status(404).json({ error: 'Sistema Solar não encontrado' });
    res.status(200).json(estelar);
  } catch (error) {
    res.status(500).json({ error: 'Error ao consultar Sistema Solar' });
  }
};

// Atualizar informações de um Sistema solar pelo id
export const updateEstelar = async (req: Request, res: Response) => {
  try {
    const estelarRepository = AppDataSource.getRepository(SistemasEstelares);
    const estelar = await estelarRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!estelar) return res.status(404).json({ error: 'Sistema Solar não encontrado' });
    estelarRepository.merge(estelar, req.body);
    await estelarRepository.save(estelar);
    res.status(200).json(estelar);
  } catch (error) {
    res.status(400).json({ error: 'Error ao atualizar as informações do Sistema Solar' });
  }
};

// Deletar um Sistema Solar
export const deleteEstelar = async (req: Request, res: Response) => {
  try {
    const estelarRepository = AppDataSource.getRepository(SistemasEstelares);
    const estelar = await estelarRepository.findOneBy({ id: parseInt(req.params.id) });
    if (!estelar) return res.status(404).json({ error: 'Sistema Solar não encontrado' });
    await estelarRepository.remove(estelar);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error ao deletar o Sistema Solar' });
  }
};