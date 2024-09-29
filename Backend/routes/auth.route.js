import express from "express";
import {Register} from "../controller/auth.controller.js";

const router = express.Router();

router.post('/auth', Register);

export default router;