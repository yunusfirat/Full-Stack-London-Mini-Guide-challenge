import express from "express";
import  { getPharmacies, getPharmaciesForEachCity  } from "../controllers/pharmacies.js"
const router = express.Router();

router.get("/", getPharmacies);


router.get("/:city/pharmacies", getPharmaciesForEachCity)



export default router;