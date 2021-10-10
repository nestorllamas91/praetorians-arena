import express from 'express';

import { getPlayers } from '@/menu/players/main/controller';

const router = express.Router();

router.get('/', getPlayers);

export default router;
