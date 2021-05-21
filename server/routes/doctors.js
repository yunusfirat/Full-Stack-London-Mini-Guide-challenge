import express from "express";
import  { getDoctors, getDoctorsForEachCity } from "../controllers/doctors.js"
const router = express.Router();

router.get("/",getDoctors);



router.get("/:city/doctors", getDoctorsForEachCity)
export default router;