import express from 'express';
import LoginModels from '../models/loginModels.js';

const router = express.Router();


export const getLogins = async (req, res)=>{
    
    const {userName ,password} = req.body; 
    const data = {
        userName:userName ,
        password:password
    }
    try{
         LoginModels.findOne(data , function(err, user) {
            if (err) throw err;
            if(user && user !== null){

                res.json({
                    status: 1,
                    message: true
                })
            }
            else{
                res.json({
                    status: 404,
                    message: false
                })

            }

        })
        
    }
    catch (err) {
        res.status(500).json({ message: err.message })

    }

}



export default router;