import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pharmacieRoutes from "./routes/pharmacies.js";
import hospitalRoutes from "./routes/hospitals.js";
import collegeRoutes from "./routes/colleges.js";
import doctorRoutes from "./routes//doctors.js";

const app = express();
app.use(bodyParser.json( {limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded( {limit: "30mb", extended: true }))
app.use(cors());

const PORT =  process.env.PORT || 5000;

app.use("/pharmacies", pharmacieRoutes);
app.use("/hospitals", hospitalRoutes);
app.use("/colleges", collegeRoutes);
app.use("/doctors", doctorRoutes);




app.listen(PORT, () => console.log(`Server started on port ${PORT}`));