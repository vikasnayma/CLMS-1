import express from "express";
import connectMongoDb from "./database/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/userroutes.js";
import otherRouter from "./routes/otherRoutes.js";

dotenv.config({});
const app = express();

const PORT = 8003;

// default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));


app.use("/user" , userRouter);
app.use("/api" , otherRouter);

connectMongoDb('mongodb://127.0.0.1:27017/clmsdb')
.then(() => console.log("MongoDb Connected"))
.catch((err) => console.log("mongo error" , err));



app.get('/' , (req , res) => {
    return res.json({msg: "hello , i am clms"});
})

app.listen(PORT , ()=> {
    console.log(`Server is listening at PORT ${PORT}`);
})