import express from 'express';
import { update } from '../controller/user.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.patch('/:id', verifyToken, update);



export default router