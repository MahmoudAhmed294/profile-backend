import mongoose from 'mongoose';

// const { model, Schema } = mongoose

const LoginModels = new mongoose.Schema({
    userName: { type: String, required: true , trim: true, maxlength: 25 },
    password: {type: String, required: true , trim: true, maxlength: 40},
    
},
)

export default mongoose.model('logins', LoginModels)