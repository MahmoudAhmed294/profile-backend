import mongoose from 'mongoose';

const { model, Schema } = mongoose

const ResumeModels =  new Schema({

    resume: { type: String, required: true },
    
},
{ 
       timestamp: true
} 
)

export default model('resume', ResumeModels)