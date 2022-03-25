import express from 'express';
import {join} from 'path';
import web from './route/web.js';
// import multer from 'multer';
const app = express();
import connectDB from './db/conn.js';

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
const port = process.env.PORT || '3000';

// Call database
connectDB(DATABASE_URL);

// Middleware to get data
app.use(express.urlencoded({extended:false}))

// template engine
app.set("view engine","ejs");



// Static file
app.use('/',express.static(join(process.cwd(),"public"))) //set this middleware for using public ( static ) file.
app.use('/edit',express.static(join(process.cwd(),"public")))
// router setting up load routes
app.use('/',web);

app.listen(port,()=>{
    console.log(`Server listen at http://localhost:${port}`);
})