import { createRequire } from "module";
const require = createRequire(import.meta.url);
const dataHarrow = require("../data/Harrow.json");
const dataHeathrow = require("../data/Heathrow.json");
const dataStratford = require("../data/Stratford.json");

export const getColleges = (req, res) => {
    res.json(dataStratford.colleges);
}


export const getCollegesForEachCity = (req,res) => {
    const city = req.params.city;
    if(city === "harrow"){
        res.json(dataHarrow.colleges)
    }
    if(city === "heathrow"){
        res.json(dataHeathrow.colleges)
    }
    if(city === "Stratford"){
        res.json(dataStratford.colleges)
    }
}