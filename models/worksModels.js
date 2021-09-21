import mongoose from 'mongoose';

const { model, Schema } = mongoose

const WorksModels = new Schema({
    description:{type:String ,required:true},
    image: { type: String, required: true },
    type: {type:String , required:true},
    linkOfProject:{type:String , required:true}
    
},
{ 
       timestamp: true
}
)

export default model('works', WorksModels)