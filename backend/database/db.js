import mongoose from "mongoose";
mongoose.set("strictQuery" , true);

async function connectMongoDb(url) {
    return mongoose.connect(url);
}

export default connectMongoDb;