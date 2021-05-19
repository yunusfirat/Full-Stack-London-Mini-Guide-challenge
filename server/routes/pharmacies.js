import express from "express";
import  { getPharmacies } from "../controllers/pharmacies.js"
const router = express.Router();

router.get("/",getPharmacies);

export default router;