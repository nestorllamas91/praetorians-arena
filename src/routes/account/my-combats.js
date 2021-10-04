import express from 'express';
const router = express.Router();
import { getCombat, getCombats, uploadCombat } from '@/controllers/account/my-combats';

router.get('/combat/:combatId', getCombat);
router.get('/combats/:steamId', getCombats);
router.post('/upload', uploadCombat);

export default router;
