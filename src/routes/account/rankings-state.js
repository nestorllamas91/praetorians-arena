import express from 'express';
const router = express.Router();

import { getRankingsByCategory } from '@/controllers/account/rankings-state';
import { updateStateOfRanking } from '@/controllers/account/rankings-state';

router.get('/rankings', getRankingsByCategory);
router.put('/change-state/:rankingId/:state', updateStateOfRanking);

export default router;
