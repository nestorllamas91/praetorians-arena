import express from 'express';
const router = express.Router();

import { getSeasons } from '@/controllers/competitions';
import { getCompetitions } from '@/controllers/competitions';
import { getRankings } from '@/controllers/competitions';
import { getRankingFromId } from '@/controllers/competitions';
import { getRankingFromParams } from '@/controllers/competitions';
import { getCombats } from '@/controllers/competitions';
import { getTeamNameOfPlayer } from '@/controllers/competitions';

router.get('/seasons', getSeasons);
router.get('/competitions/:season', getCompetitions);
router.get('/rankings', getRankings);
router.get('/ranking/:rankingId', getRankingFromId);
router.get('/ranking/:season/:competition', getRankingFromParams);
router.get('/combats', getCombats);
router.get('/team-of-player/:rankingId/:steamId', getTeamNameOfPlayer);

export default router;
