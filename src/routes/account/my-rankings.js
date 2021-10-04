import express from 'express';
const router = express.Router();

import { getMyRankings } from '@/controllers/account/my-rankings';
import { createChallengeCasual } from '@/controllers/account/my-rankings';
import { checkPlayerChallenged } from '@/controllers/account/my-rankings';

router.get('/rankings/:steamId', getMyRankings);
router.post('/challenge-casual/:rankingId/:teamName1/:teamName2', createChallengeCasual);
router.get('/challenge/player-challenged/:rankingId/:teamName', checkPlayerChallenged);

export default router;
