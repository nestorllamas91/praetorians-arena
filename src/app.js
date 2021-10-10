import express from 'express';
import mongoose from 'mongoose';
import next from 'next';
import passport from 'passport';

import competitionsRouter from '@/menu/competitions/router';
import gamesRouter from '@/menu/games/router';
import helpRouter from '@/menu/help/router';
import homeRouter from '@/menu/home/router';
import playersRouter from '@/menu/players/router';
import statisticsRouter from '@/menu/stats/router';
import jwtPassportStrategy from '@/shared/passport/jwt';
import steamPassportStrategy from '@/shared/passport/steam';
import createRankings from '@/utils/create-rankings';

// Prepare the Next.js server to use the Express.js server in conjunction.
const dev = process.env.NODE_ENV !== 'production';
const nextServer = next({ dev });
nextServer.prepare().then(async () => {
  // Create the Express.js server.
  const expressServer = express();

  // Configure the Express.js server to recognize incoming HTTP requests as JSON objects.
  expressServer.use(express.json());

  // Configure the Express.js server to recognize incoming HTTP requests as strings or arrays.
  expressServer.use(express.urlencoded({ extended: true }));

  // Configure the Express.js server to use Passport as authentication system with Steam and JWT.
  expressServer.use(passport.initialize());
  passport.use(steamPassportStrategy);
  passport.use(jwtPassportStrategy);

  // Serve the uploads made by the players as downloads in a given path of the website for other players.
  expressServer.use('/downloads', express.static('@/uploads'));

  // Configure the backend routing for the Express.js server.
  const router = express.Router();
  router.use('/home', homeRouter);
  router.use('/competitions', competitionsRouter);
  router.use('/games', gamesRouter);
  router.use('/players', playersRouter);
  router.use('/stats', statisticsRouter);
  router.use('/help', helpRouter);
  router.post('/create-rankings', createRankings);
  expressServer.use('/api', router);

  // Configure the frontend routing for the Next.js server.
  const handle = nextServer.getRequestHandler();
  expressServer.all('*', (req, res) => handle(req, res));

  // Connect to the MongoDB database `praetorians-arena` using the ODM Mongoose.
  await mongoose.connect(process.env.MONGODB_URI);

  // Start listening for connections into the Express.js server.
  const port = Number.parseInt(process.env.PORT, 10) || 3000;
  expressServer.listen(port, () => console.log(`> App started on ${process.env.HOST}`));
});
