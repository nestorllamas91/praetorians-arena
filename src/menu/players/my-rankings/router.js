import express from 'express';

import { checkPlayerChallenged, createChallengeCasual, getMyRankings } from '@/menu/players/my-rankings/controller';

const router = express.Router();

router.get('/rankings/:steamId', getMyRankings);
router.post('/challenge-casual/:rankingId/:teamName1/:teamName2', createChallengeCasual);
router.get('/challenge/player-challenged/:rankingId/:teamName', checkPlayerChallenged);

export default router;
