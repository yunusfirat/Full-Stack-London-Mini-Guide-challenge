import express from "express";
import { category } from "../controllers/single.js"
const router = express.Router();


router.get("/:city/:category", category)

export default router;