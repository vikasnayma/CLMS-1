
import { Course } from "../model/otherModel.js";

export const createCourse = async (req , res) => {
    try {
        const course = new Course(req.body);
        const newCourse = await course.save();
        return res.status(201).json({ msg : "course created successfully." , newCourse });
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

export const getAllCourse = async (req , res) => {
    try {
        const allCourses = await Course.find();
        return res.status(201).json({ allCourses });
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

export const getCourseWithID = async (req , res) => {
    try {
        const course = await Course.findById(req.params.id);
        if( !course) return res.status(400).json({ msg: "course not available with the given id"});
        return res.status(201).json({ course });
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

export const updateCourse = async (req,res) => {
    try {
        await Course.findByIdAndUpdate(req.params.id , { title : "devops" } , { new : true });
        return res.status(201).json({msg: "updated succesfully"});
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

export const deleteCourse = async(req,res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        return res.status(201).json({msg : " course deleted "});
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

