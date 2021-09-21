import express from "express";

import { getResume , updateResume ,sendContactToMail , createSkills , getSkills , getWorks,createWorks , getLogins } from '../controller/index.js';

const router = express.Router();

router.post('/login', getLogins);

router.get('/resume', getResume);
router.post('/updateResume', updateResume);


router.post('/contact', sendContactToMail);


router.get('/skills', getSkills);
router.post('/createSkills', createSkills);


router.get('/works', getWorks);
router.post('/createWorks', createWorks);





export default router;