import express from "express";
import {addVideo,getVideo} from '../controller/addVideo.controller.js';

const router = express.Router();

router.post('/addVideo', addVideo);
router.get('/getVideo', getVideo);

export default router;