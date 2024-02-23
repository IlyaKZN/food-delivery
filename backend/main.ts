import { PrismaClient } from '@prisma/client';
import express from 'express';
import crypto from 'crypto';
import cors from 'cors';

export const prisma = new PrismaClient();

const app = express();

app.use(express.json());
// use cors
app.use(cors({
  // origin: 'http://localhost:9000'
}));

// login, register, forget password

const doLogin = async (user) => {
  const newToken = crypto.randomBytes(32).toString('hex');
  const token = await prisma.token.create({
    data: {
      token: newToken,
      userId: user.id,
    },
  });
  return token.token;
};

app.post('/register', async (req, res) => {
  const { phone_number, password } = req.body;
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  const user = await prisma.user.create({
    data: {
      phone_number,
      password: hash,
      name: 'John Doe',
    },
  });
  return res.status(201).json({ token: await doLogin(user) });
});

app.post('/login', async (req, res) => {
  const { phone_number, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      phone_number,
    },
  });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  const isPasswordValid = crypto.createHash('sha256').update(password).digest('hex') === user.password;
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid password' });
  }
  return res.status(200).json({ token: await doLogin(user) });
});

app.post('/forget-password', async (req, res) => {
  const { phone_number, password } = req.body;
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  const user = await prisma.user.update({
    where: {
      phone_number,
    },
    data: {
      password: hash,
    },
  });
  return res.status(200).json({ token: await doLogin(user) });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
