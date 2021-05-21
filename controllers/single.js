import { createRequire } from "module";
const require = createRequire(import.meta.url);
const dataHarrow = require("../data/Harrow.json");
const dataHeathrow = require("../data/Heathrow.json");
const dataStratford = require("../data/Stratford.json");
const uuid = require("uuid");
//  get request
export const category = (req,res) => {
    const city = req.params.city;
    const category = req.params.category;
    if (city === "harrow" && category === "pharmacies"){
        res.json(dataHarrow.pharmacies)
    }
    if( city === "harrow" && category === "hospitals"){
        res.json(dataHarrow.hospitals)
    }
    if( city === "harrow" && category === "doctors"){
        res.json(dataHarrow.doctors)
    }
    if( city === "harrow" && category === "colleges"){
        res.json(dataHarrow.colleges)
    }
    if (city === "heathrow" && category === "pharmacies"){
        res.json(dataHeathrow.pharmacies)
    }
    if( city === "heathrow" && category === "hospitals"){
        res.json(dataHeathrow.hospitals)
    }
    if( city === "heathrow" && category === "doctors"){
        res.json(dataHeathrow.doctors)
    }
    if( city === "heathrow" && category === "colleges"){
        res.json(dataHeathrow.colleges)
    }
    if (city === "stratford" && category === "pharmacies"){
        res.json(dataStratford.pharmacies)
    }
    if( city === "stratford" && category === "hospitals"){
        res.json(dataStratford.hospitals)
    }
    if( city === "stratford" && category === "doctors"){
        res.json(dataStratford.doctors)
    }
    if( city === "stratford" && category === "colleges"){
        res.json(dataStratford.colleges)
    }

}

// create new Data
export const addnewdata =  (req, res) => {
    const city = req.params.city;
    const newData = {
        id: uuid.v4(),
        name: req.body.name,
        website: req.body.email,
        email: req.body.email,
        address: req.body.address
    }

    if(!newData.name || !newData.email || !newData.website || !newData.address){
        return res.status(400).json({ msg: "please make sure that you have added name, email, address and website."})
    }if(city === "harrow"){
        dataHarrow.push(newData);
    }if(city === "heathrow"){
        dataHeathrow.push(newData);
    }if(city === "stratford"){
        dataStratford.push(newData);
    }
    res.redirect("/");
}