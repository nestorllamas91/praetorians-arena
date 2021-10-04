import express from 'express';
const router = express.Router();

import { sendMail } from '@/controllers/contact';

router.post('/', sendMail);

export default router;
