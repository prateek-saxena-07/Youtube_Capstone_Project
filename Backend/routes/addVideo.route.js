import express from "express";
import {deleteVideos, addVideos, getVideos, updateVideos,getVideo} from '../controller/addVideo.controller.js';
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// router.post('/addVideo', addVideo);
router.get('/getVideos', getVideos);
// =============================================
router.post("/", verifyToken, addVideos);
router.put('/:id',verifyToken, updateVideos);
router.delete("/:id", verifyToken, deleteVideos);
router.get("/find/:id", getVideo);//:id video._id
export default router;