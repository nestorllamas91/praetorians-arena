import express from 'express';

import {
  acceptTeamProposal,
  addPlayerToRanking,
  cancelTeamProposal,
  checkPlayerInRanking,
  checkRankingMaxPlayers,
  getOpenRankings,
  getTeamProposals,
  refuseTeamProposal,
  sendTeamProposal
} from '@/menu/players/my-inscriptions/controller';

const router = express.Router();

router.get('/team-proposals/:steamId', getTeamProposals);
router.get('/open-rankings', getOpenRankings);
router.get('/check-player/:rankingID/:steamId', checkPlayerInRanking);
router.get('/check-max-players/:rankingID', checkRankingMaxPlayers);
router.post('/add-player/:rankingID/:steamId', addPlayerToRanking);
router.post('/send-proposal/:rankingID/:teamName/:players/:nickname', sendTeamProposal);
router.put('/cancel-proposal/:rankingID/:steamNickname', cancelTeamProposal);
router.put('/accept-proposal/:rankingID/:steamNickname', acceptTeamProposal);
router.put('/refuse-proposal/:rankingID/:steamNickname', refuseTeamProposal);

export default router;
