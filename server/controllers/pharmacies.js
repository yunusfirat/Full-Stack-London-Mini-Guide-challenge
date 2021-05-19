const file = "../data/Harrow.json"

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("../data/Harrow.json");

export const getPharmacies = (req, res) => {
    res.json(data.pharmacies);

}

export const createPharmacies = (req,res) => {
    res.send("post creation")
}