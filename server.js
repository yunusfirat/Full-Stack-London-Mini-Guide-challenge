import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pharmacieRoutes from "./routes/pharmacies.js";
import hospitalRoutes from "./routes/hospitals.js";
import collegeRoutes from "./routes/colleges.js";
import doctorRoutes from "./routes//doctors.js";
import singleRoutes from "./routes/single.js";
import path from "path";

const app = express();

app.use(bodyParser.json( {limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded( {limit: "30mb", extended: true }))
app.use(cors());

const PORT =  process.env.PORT || 5000;
app.use("/", singleRoutes);


app.use("/pharmacies", pharmacieRoutes);

app.use("/hospitals", hospitalRoutes);


app.use("/colleges", collegeRoutes);

app.use("/doctors", doctorRoutes);

if(process.env.NODE_ENV === "production"){
    // set static folder
    app.use("/", express.static("client/build"));
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));