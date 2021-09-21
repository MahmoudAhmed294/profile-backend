import mongoose from 'mongoose';

const { model, Schema } = mongoose

const SkillsModels = new Schema({
    skillsName:{type:String ,required:true},
    image: { type: String, required: true },
    type: {type:String , required:true}
    
},
{ 
       timestamp: true
}
)

export default model('skills', SkillsModels)