import { createRequire } from "module";
const require = createRequire(import.meta.url);
const dataHarrow = require("../data/Harrow.json");
const dataHeathrow = require("../data/Heathrow.json");
const dataStratford = require("../data/Stratford.json");


export const getDoctors = (req, res) => {
    res.json(dataStratford.doctors);
}


export const getDoctorsForEachCity = (req,res) => {
    const city = req.params.city;
    if(city === "harrow"){
        res.json(dataHarrow.doctors)
    }
    if(city === "heathrow"){
        res.json(dataHeathrow.doctors)
    }
    if(city === "Stratford"){
        res.json(dataStratford.doctors)
    }
}