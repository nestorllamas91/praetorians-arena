import express from 'express';

import populateDatabase from '@/utils/populate-database';
import accountRouter from '@/routes/account';
import competitionsRouter from '@/routes/competitions';
import contactRouter from '@/routes/contact';
import gamesRouter from '@/routes/games';
import homeRouter from '@/routes/home';
import playersRouter from '@/routes/players';
import statisticsRouter from '@/routes/stats';
import authenticationRouter from '@/routes/users';

const router = express.Router();
router.post('/populate', populateDatabase);
router.use('/home', homeRouter);
router.use('/competitions', competitionsRouter);
router.use('/games', gamesRouter);
router.use('/players', playersRouter);
router.use('/stats', statisticsRouter);
router.use('/contact', contactRouter);
router.use('/auth', authenticationRouter);
router.use('/account', accountRouter);

export default router;
