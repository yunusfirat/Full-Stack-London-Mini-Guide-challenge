import express from "express";
import { category, addnewdata } from "../controllers/single.js"
const router = express.Router();


router.get("/:city/:category", category)
router.post("/", addnewdata)
export default router;