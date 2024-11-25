import express from 'express';
import { submitPiData } from './SubmitData';

const router = express.Router();

router.post("/submitdata", submitPiData);
router.get('/c', async (req, res) => {
    res.send('OK');
});
 
export default router;
     