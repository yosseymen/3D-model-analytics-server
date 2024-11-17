import { Router } from 'express';
import { updateClicks } from '../controllers/clicks.controllers';

const router = Router();


router.post('/track-click', updateClicks);

export default router;
