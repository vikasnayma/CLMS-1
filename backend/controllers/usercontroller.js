import { User } from "../model/usermodel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register = async( req , res) => {
    try {

        const { name , email , password } = req.body;
        if(!name || !email || !password ){
            res.status(400).json({
                success: false,
                message:"All fields all required."
            })
        }

        const user = await User.findOne({email});
        if(user){
            res.status(400).json({
                success: false,
                message:"User already exists with filled credentials."
            })
        }

        const hashedPassword = await bcrypt.hash(password , 10); 

        await User.create({
            name,
            email,
            password:hashedPassword
        })

        return res.status(201).json({
            success:true,
            message:"User Registered Successfully."
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to register."
        })
    }
}

export const login = async( req , res ) => {
    try {
        const { email , password } = req.body;
        if(!email || !password ){
            res.status(400).json({
                success: false,
                message:"All fields all required."
            })
        }

        const user = await User.findOne({email});
        if(!user){
            res.status(400).json({
                success: false,
                message:"Enter correct credentials."
            })
        }

        const isCorrectPassword = await bcrypt.compare(password , user.password)
        if(!isCorrectPassword){
            res.status(400).json({
                success: false,
                message:"Enter correct credentials."
            })
        }
        generateToken(res , user ,`Welcome back ${user.name}` );

    } catch (error) {
         console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to login."
        })
    }
}