import express from "express";
import  { getHospitals } from "../controllers/hospitals.js"
const router = express.Router();

router.get("/",getHospitals);

export default router;