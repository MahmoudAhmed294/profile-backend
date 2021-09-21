import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import profileData from "./routers/profile.js"

/* ----------------------------------- // ----------------------------------- */

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
dotenv.config();

/* ----------------------------------- // ----------------------------------- */

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;

/* ----------------------------------- // ----------------------------------- */
app.get('/', (req, res) => {
    res.send('BackEnd!')
  })
  


mongoose.connect(DATABASE_URL , {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> app.listen(PORT ,()=> console.log("connected to port" , PORT)))
.catch(error => { console.error(error) })

/* ----------------------------------- // ----------------------------------- */

app.use('/', profileData)
