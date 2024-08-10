import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

// Middleware para validar entrada para criar ou atualizar Planetas
export const validaPlanets = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    nome: Joi.string().required(),
    clima: Joi.string().required(),
    terreno: Joi.string().required(),
    populacao: Joi.number().required()//,planetas: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  next();
};

//Valida Estelar
export const validaEstelar = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    nome: Joi.string().required(),
    descricao: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  next();
};
//Valida Personagem
export const validaPersonagem = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    nome: Joi.string().required(),
    raca: Joi.string().required(),
    afiliacao: Joi.string().required(),
    planetaNatal: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  next();
};

//Valida Nave
export const validaNave = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    nome: Joi.string().required(),
    modelo: Joi.string().required(),
    fabricante: Joi.string().required(),
    passageiros: Joi.number().required()
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  next();
};