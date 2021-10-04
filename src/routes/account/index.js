import express from 'express';
const router = express.Router();

import ProfileRouter from '@/routes/account/profile';
import NotificationsRouter from '@/routes/account/notifications';
import MyInscriptionsRouter from '@/routes/account/my-inscriptions';
import MyRankingsRouter from '@/routes/account/my-rankings';
import MyCombatsRouter from '@/routes/account/my-combats';
import RankingsStateRouter from '@/routes/account/rankings-state';

router.use('/profile', ProfileRouter);
router.use('/notifications', NotificationsRouter);
router.use('/my-inscriptions', MyInscriptionsRouter);
router.use('/my-rankings', MyRankingsRouter);
router.use('/my-combats', MyCombatsRouter);
router.use('/rankings-state', RankingsStateRouter);

export default router;
