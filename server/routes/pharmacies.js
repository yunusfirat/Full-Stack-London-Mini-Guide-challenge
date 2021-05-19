import express from "express";
import  { getPharmacies, createPharmacies } from "../controllers/pharmacies.js"
const router = express.Router();

router.get("/", getPharmacies);
router.post("/", createPharmacies);
export default router;