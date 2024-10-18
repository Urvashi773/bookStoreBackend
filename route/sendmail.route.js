import express from "express";
import { sendEmail } from "../controller/email.controller.js";


const router = express.Router()


// router.get('/dashboard', authMiddleware, (req, res) => {
//     res.json({ message: 'Welcome to the dashboard', userId: req.user });
//   });
  
router.post("/sendmail",sendEmail)
export default router;