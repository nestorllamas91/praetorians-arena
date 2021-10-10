import express from 'express';

import { sendMail } from '@/menu/help/contact/controller';

const router = express.Router();

router.post('/', sendMail);

export default router;
