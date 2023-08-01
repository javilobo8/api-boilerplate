import { Router } from 'express';
import { monitHealthController } from './monit.controller.health';

const router = Router();

router.get('/health', monitHealthController);

export default router;
