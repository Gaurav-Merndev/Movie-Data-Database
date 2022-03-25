import express from "express";
import moviecontroller from "../controller/MovieController.js";

const router = express.Router();


router.get('/',moviecontroller.getAllDoc);
router.post('/',moviecontroller.createDoc);
router.get('/edit/:id',moviecontroller.editDocById);
router.post('/update/:id',moviecontroller.updateDocById);
router.post('/delete/:id',moviecontroller.deleteDocById);





export default router;