//importando bibliotecas e dependencias.
import { Request, Response } from 'express';
import { AppDataSource } from '../dataSource';
import { Planets } from '../models/planets';


const repositorioPlanets = AppDataSource.getRepository(Planets);

// Criar um Planeta
export const createPlanets = async (req: Request, res: Response) => {
  try {
    const { nome, clima, terreno, populacao} = req.body;

    if (!nome || !clima || !terreno || typeof populacao !== 'number') {
      return res.status(400).json({ error: 'Dados inseridos inválidos, verificar o conteudo de envio.' });
    }

    const newPlanet = new Planets();
    newPlanet.nome = nome;
    newPlanet.clima = clima;
    newPlanet.terreno = terreno;
    newPlanet.populacao = populacao;
    //newPlanet.planetas = planetasId;
    
    await repositorioPlanets.save(newPlanet);

    res.status(201).json({ message: 'Planeta criado com sucesso', planet: newPlanet });
  } catch (error) {
    console.error(error); // Log para depuração
    res.status(500).json({ error: 'Erro ao criar planeta' });
  }
};


// Consultar todos os Planetas
export const getPlanets = async (req: Request, res: Response) => {
  try {
    console.log('Tentando buscar planetas...');
    const planets = await repositorioPlanets.find();
    console.log('Planetas encontrados:', planets);
    res.status(200).json(planets);
  } catch (error) {
    console.error('Erro ao buscar planetas:', error);
    res.status(500).json({ error: 'Erro ao buscar planetas' });
  }
};
// Consultar um Planeta pelo id
export const getPlanetsId = async (req: Request, res: Response) => {
  try {
    const planets = await repositorioPlanets.findOneBy({ id: parseInt(req.params.id) });
    if (!planets) return res.status(404).json({ error: 'Planeta não encontrada' });
    res.status(200).json(planets);
  } catch (error) {
    res.status(500).json({ error: 'Error ao buscar Planeta' });
  }
};
// Atualizar informações de um Planeta pelo id
export const updatePlanets = async (req: Request, res: Response) => {
  try {
    const planets = await repositorioPlanets.findOneBy({ id: parseInt(req.params.id) });
    if (!planets) return res.status(404).json({ error: 'Planeta não encontrado' });
    repositorioPlanets.merge(planets, req.body);
    await repositorioPlanets.save(planets);
    res.status(200).json(planets);
  } catch (error) {
    res.status(400).json({ error: 'Error ao atualizar informações do Planeta' });
  }
};
// Deletar um Planeta
export const deletePlanets = async (req: Request, res: Response) => {
  try {
    const planets = await repositorioPlanets.findOneBy({ id: parseInt(req.params.id) });
    if (!planets) return res.status(404).json({ error: 'Planeta não encontrada' });
    await repositorioPlanets.remove(planets);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error ao deletar Planeta' });
  }
};