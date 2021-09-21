import express from 'express';
import SkillsModels  from '../models/skillsModels.js';


const router = express.Router();


const getSkills = async (req, res)=>{
    try{
        const FetchSkillsResult = await  SkillsModels.find();
        res.status(200).json(FetchSkillsResult) 
    }
    catch{
        res.status(404).json({ message: err.message })
    }

}

const createSkills = async (req, res)=>{
    const { skillsName , skillsImage , skillsType } = req.body;

    const newSkills = new SkillsModels({skillsName , image:skillsImage , type:skillsType})

    try{
        await newSkills.save();
        res.status(201).json(newSkills)

    }
    catch{
        res.status(404).json({ message: err.message })

    }

}



export {getSkills , createSkills}

export default router;