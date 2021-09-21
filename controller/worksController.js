import express from 'express';
import WorksModels from '../models/worksModels.js';

const router = express.Router();


const getWorks = async (req, res)=>{
    try{
        const FetchWorksResult = await  WorksModels.find();
        res.status(200).json(FetchWorksResult)
    }
    catch{
        res.status(404).json({ message: err.message })
    }

}

const createWorks = async (req, res)=>{
    const { worksUrl , worksImage ,worksType ,worksDescription } = req.body;

    const newWorks = new WorksModels({description:worksDescription , image:worksImage ,type:worksType ,linkOfProject:worksUrl})

    try{
        await newWorks.save();
        res.status(201).json(newWorks)

    }
    catch{
        res.status(404).json({ message: err.message })

    }

}



export {getWorks , createWorks}
export default router;