import express from 'express';
const router = express.Router();

import { getGames } from '@/controllers/games';

router.get('/', getGames);

export default router;
