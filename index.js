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

var corsOptions = {
    origin: 'https://mahmoud-resume.netlify.app',
    optionsSuccessStatus: 200, // For legacy browser support,
    methods: ['GET', 'PUT', 'POST'],
    allowedHeaders:['Content-Type', 'Authorization'],
        exposedHeaders:['Content-Range', 'X-Content-Range'],
    credentials:true

}

app.use(cors(corsOptions));
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
