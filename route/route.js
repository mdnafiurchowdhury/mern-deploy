
import express from 'express';
import { saveSendEmails, getEmails, saveDraft, MoveApiToBin, StarredFuntion } from '../controller/email-controller.js';



 
const router = express.Router();

router.post('/save', saveSendEmails ) 
// this the confusing part cuz you have to post login 
// now we need to handle get
router.get('/emailsi/:type', getEmails);

// for the draft
router.post('/save-draft', saveDraft);
router.post('/bin', MoveApiToBin)
router.post('/starred', StarredFuntion);


export default router;