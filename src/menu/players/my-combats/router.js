import express from 'express';

import { getCombat, getCombats, uploadCombat } from '@/menu/players/my-combats/controller';

const router = express.Router();

router.get('/combat/:combatId', getCombat);
router.get('/combats/:steamId', getCombats);
router.post('/upload', uploadCombat);

export default router;
