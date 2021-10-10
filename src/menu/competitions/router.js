import express from 'express';

import {
  getCombats,
  getCompetitions,
  getRankingFromId,
  getRankingFromParams,
  getRankings,
  getSeasons,
  getTeamNameOfPlayer
} from '@/menu/competitions/controller';

const router = express.Router();

router.get('/seasons', getSeasons);
router.get('/competitions/:season', getCompetitions);
router.get('/rankings', getRankings);
router.get('/ranking/:rankingId', getRankingFromId);
router.get('/ranking/:season/:competition', getRankingFromParams);
router.get('/combats', getCombats);
router.get('/team-of-player/:rankingId/:steamId', getTeamNameOfPlayer);

export default router;
