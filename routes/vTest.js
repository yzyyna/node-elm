import express from 'express'
import VTest from '../controller/vTest/vTest'

const router = express.Router();
router.get('/api',VTest.first);

export default router
