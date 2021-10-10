import express from 'express';

import { getRankingsByCategory, updateStateOfRanking } from '@/menu/players/rankings-state/controller';

const router = express.Router();

router.get('/rankings', getRankingsByCategory);
router.put('/change-state/:rankingId/:state', updateStateOfRanking);

export default router;
