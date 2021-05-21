import { createRequire } from "module";
const require = createRequire(import.meta.url);
const dataHarrow = require("../data/Harrow.json");
const dataHeathrow = require("../data/Heathrow.json");
const dataStratford = require("../data/Stratford.json");


export const getHospitals = (req, res) => {
    res.json(dataStratford.hospitals);
}


export const getHospitalsForEachCity = (req,res) => {
    const city = req.params.city;
    if(city === "harrow"){
        res.json(dataHarrow.hospitals)
    }
    if(city === "heathrow"){
        res.json(dataHeathrow.hospitals)
    }
    if(city === "Stratford"){
        res.json(dataStratford.hospitals)
    }
}