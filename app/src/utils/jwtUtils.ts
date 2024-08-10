import jwt from 'jsonwebtoken';

const secret = 'projetostarwars'; //Chave secreta.

//Geração da Token, ela expira em uma 1h
export const generateToken = (user: any) => {
  return jwt.sign(user, process.env.JWT_SECRET as string, { expiresIn: '1h' });
};


export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};