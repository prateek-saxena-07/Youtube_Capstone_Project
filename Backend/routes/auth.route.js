import express from "express";
import {Register,SignIn} from "../controller/auth.controller.js";

const router = express.Router();

router.post('/auth/register', Register);
router.post('/auth/login', SignIn);

export default router;