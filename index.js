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
app.use(cors({origin: '*'}));
dotenv.config();

/* ----------------------------------- // ----------------------------------- */

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5000;

/* ----------------------------------- // ----------------------------------- */
app.get('/', (req, res) => {
    res.send('BackEnd!')
  })

  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



mongoose.connect(DATABASE_URL , {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> app.listen(PORT ,()=> console.log("connected to port" , PORT)))
.catch(error => { console.error(error) })

/* ----------------------------------- // ----------------------------------- */

app.use('/', profileData)
