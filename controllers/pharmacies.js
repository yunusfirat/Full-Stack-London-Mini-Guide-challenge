import { createRequire } from "module";
const require = createRequire(import.meta.url);
const dataHarrow = require("../data/Harrow.json");
const dataHeathrow = require("../data/Heathrow.json");
const dataStratford = require("../data/Stratford.json");


export const getPharmacies = (req, res) => {
    res.json(dataStratford.pharmacies);

}

export const getPharmaciesForEachCity = (req,res) => {
    const city = req.params.city;
    if(city === "harrow"){
        res.json(dataHarrow.pharmacies)
    }
    if(city === "heathrow"){
        res.json(dataHeathrow.pharmacies)
    }
    if(city === "Stratford"){
        res.json(dataStratford.pharmacies)
    }
}
