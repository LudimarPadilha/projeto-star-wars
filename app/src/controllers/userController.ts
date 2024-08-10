import { Request, Response } from 'express';
import { AppDataSource } from '../dataSource';
import { User } from '../models/userModel';
import bcrypt from 'bcryptjs';

export const createUsuario = async (req: Request, res: Response) => {
  try {
    const { email, password, afiliacao } = req.body;

    // Verifique se o usuário já existe
    const userRepository = AppDataSource.getRepository(User);
    const existingUser = await userRepository.findOneBy({ email });

    if (existingUser) return res.status(400).json({ error: 'Usuário já existe' });

    // Crie um novo usuário
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User();
    user.email = email;
    user.password = hashedPassword;
    user.afiliacao = afiliacao;

    await userRepository.save(user);

    res.status(201).json({ message: 'Usuário criado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};