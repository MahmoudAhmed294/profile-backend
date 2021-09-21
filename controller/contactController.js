import express from 'express';

const router = express.Router();
import transporter from "../models/sendMailModels.js";

const sendContactToMail = async (req, res)=>{
    try{
    
    const {   
         name,
    subject,
    email,
    message,
} = req.body

const mail = {
    from: name,
    to: process.env.EMAIL,
    subject: subject,
    text: `${name} <${email}> \n${message}`,
  };


 transporter.sendMail(mail, (err, data)=> {
    if (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
      } else {
        res.status(200).send("Email successfully sent to recipient!");
      }
        });
    }
    catch(err){
        res.status(404).json({ message: err.message })
    }

}




export {sendContactToMail }
export default router;