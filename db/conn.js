import mongoose from "mongoose";

const connectDB = async(DATABASE_URL)=>{
    try{
        const DB_option = {
            dbname: "Movie",
        };
        await mongoose.connect(DATABASE_URL, DB_option);
        console.log("Connection is Successful");
    }
    catch(err){
         console.log("No Connection");
    }
};

export default connectDB;