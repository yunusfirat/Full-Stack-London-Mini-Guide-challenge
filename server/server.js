import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/pharmacies.js";

const app = express();

const PORT =  process.env.PORT || 5000;

app.use("/pharmacies", postRoutes);


app.use(bodyParser.json( {limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded( {limit: "30mb", extended: true }))
app.use(cors());


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));