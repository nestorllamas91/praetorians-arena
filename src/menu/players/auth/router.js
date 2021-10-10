import express from 'express';
import passport from 'passport';

import { logInPlayer, logOutPlayer } from '@/menu/players/auth/controller';

const router = express.Router();

router.get('/login', passport.authenticate('steam'));
router.get('/login/return', passport.authenticate('steam', { failureRedirect: '/' }), logInPlayer);
router.post('/logout', passport.authenticate('jwt', { session: false }), logOutPlayer);

export default router;
