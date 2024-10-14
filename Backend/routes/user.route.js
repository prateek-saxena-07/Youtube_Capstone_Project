import express from 'express';
import { like,dislike,getUser } from '../controller/user.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

//like a video
router.put("/like/:videoId", verifyToken, like);

//dislike a video
router.put("/dislike/:videoId", verifyToken, dislike);


router.get('/:id',getUser)

export default router