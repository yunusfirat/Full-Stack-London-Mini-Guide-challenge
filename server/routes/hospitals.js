import express from "express";
import  { getHospitals, getHospitalsForEachCity } from "../controllers/hospitals.js"
const router = express.Router();

router.get("/",getHospitals);


router.get("/:city/hospitals", getHospitalsForEachCity)
export default router;