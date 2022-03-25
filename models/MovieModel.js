import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    // image:{type:Buffer,required:true},
    name:{type:String, required:true},
    movie:{type:String, required:true},
    year:{type:Number,required:true},
    director:{ type:String,required:true}
    
});

const MoviesData = mongoose.model('MovieData',movieSchema);

export default MoviesData;