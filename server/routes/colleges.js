import express from "express";
import  { getColleges, getCollegesForEachCity } from "../controllers/colleges.js"
const router = express.Router();

router.get("/",getColleges);

router.get("/:city/colleges", getCollegesForEachCity)
export default router;