import express from 'express';

import AuthRouter from '@/menu/players/auth/router';
import MainRouter from '@/menu/players/main/router';
import MyCombatsRouter from '@/menu/players/my-combats/router';
import MyInscriptionsRouter from '@/menu/players/my-inscriptions/router';
import MyRankingsRouter from '@/menu/players/my-rankings/router';
import NotificationsRouter from '@/menu/players/notifications/router';
import ProfileRouter from '@/menu/players/profile/router';
import RankingsStateRouter from '@/menu/players/rankings-state/router';

const router = express.Router();

router.use('/', MainRouter);
router.use('/auth', AuthRouter);
router.use('/profile', ProfileRouter);
router.use('/notifications', NotificationsRouter);
router.use('/my-inscriptions', MyInscriptionsRouter);
router.use('/my-rankings', MyRankingsRouter);
router.use('/my-combats', MyCombatsRouter);
router.use('/rankings-state', RankingsStateRouter);

export default router;
