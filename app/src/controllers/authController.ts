//importando bibliotecas e dependecias.
import { Request, Response } from 'express';
import { AppDataSource } from '../dataSource';
import { User } from '../models/userModel';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwtUtils';

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ email });

    if (!user) return res.status(404).json({ error: 'Usuario não encontrado' });

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) return res.status(401).json({ error: 'Senha invalida' });
//    const token = generateToken({ id: user.id, email: user.email });
      const token = generateToken({email: user.email, password: user.password, afiliacao: user.afiliacao});
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro no login ' });
  }
};