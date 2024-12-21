import express from "express";
import { createCourse, deleteCourse, getAllCourse, getCourseWithID, updateCourse } from "../controllers/otherController.js";


const router = express.Router();

//Routes for Course CRUD
router.post('/course' , createCourse);
router.get('/course' , getAllCourse);
router.get('/course/:id' , getCourseWithID);
router.put('/course/:id' , updateCourse);
router.delete('/course/:id' , deleteCourse);


export default router;