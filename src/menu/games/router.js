import express from 'express';

import { getGames } from '@/menu/games/controller';

const router = express.Router();

router.get('/', getGames);

export default router;
