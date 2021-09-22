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
const allowlist = ['https://mahmoud-resume.netlify.app/'];

const corsOptionsDelegate = (req, callback) => {
    let corsOptions;

    let isDomainAllowed = whitelist.indexOf(req.header('Origin')) !== -1;

    if (isDomainAllowed ) {
        // Enable CORS for this request
        corsOptions = { origin: true }
    } else {
        // Disable CORS for this request
        corsOptions = { origin: false }
    }
    callback(null, corsOptions)
}

app.use(cors(corsOptionsDelegate));
dotenv.config();

/* ----------------------------------- // ----------------------------------- */

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;

/* ----------------------------------- // ----------------------------------- */
app.get('/', (req, res) => {
    res.send('BackEnd update!')
  })




mongoose.connect(DATABASE_URL , {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> app.listen(PORT ,()=> console.log("connected to port" , PORT)))
.catch(error => { console.error(error) })

/* ----------------------------------- // ----------------------------------- */

app.use('/', profileData)
