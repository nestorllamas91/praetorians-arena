import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import next from 'next';
import passport from 'passport';

import corsOptions from '@/middleware/cors';
import jwtPassportStrategy from '@/middleware/passport/jwt';
import steamPassportStrategy from '@/middleware/passport/steam';
import router from '@/routes';
import { handleResponseError } from '@/utils/handlers';

console.log('> Starting app...');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
app.prepare().then(async () => {
  const server = express();
  server.use(cors(corsOptions));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(passport.initialize());
  passport.use(steamPassportStrategy);
  passport.use(jwtPassportStrategy);
  server.use('/downloads', express.static('../uploads'));
  server.use('/api', router);
  server.use(handleResponseError);
  const handle = app.getRequestHandler();
  server.all('*', (req, res) => handle(req, res));
  await mongoose.connect(process.env.MONGODB_URI);
  const port = Number.parseInt(process.env.PORT, 10) || 3000;
  server.listen(port, () => console.log(`> App started on ${process.env.HOST}`));
});
