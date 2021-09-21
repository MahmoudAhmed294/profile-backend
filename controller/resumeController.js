import express from 'express';
import ResumeModels  from '../models/resumeModels.js';
import fs from 'fs';

const router = express.Router();


const getResume = async (req, res)=>{
    try{
        const FetchResumeResult = await  ResumeModels.find();
        res.status(200).json(FetchResumeResult)
    }
    catch{
        res.status(404).json({ message: err.message })
    }

}

const updateResume = async (req, res)=>{
    
    
    try{
        const { resume } = req.body;
        const newResume = new ResumeModels({resume})
        await newResume.save();
        res.status(201).json(newResume)

    }
    catch(err){
        res.status(404).json({ message: err.message })

    }

}



export {getResume , updateResume}
export default router;