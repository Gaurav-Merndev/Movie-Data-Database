
import MoviesData from "../models/MovieModel.js";


class moviecontroller {
  static createDoc = async(req,res)=> {
      try{
        
          const doc = new MoviesData({
            
              name:req.body.name,
              movie:req.body.movie,
              year:req.body.year,
              director:req.body.director,
            
          })
        
          const result = await doc.save()
    
          res.redirect('/');

      }
      catch(error){
          console.log(error);
      }
  }

  static getAllDoc = async(req,res) => {
      try{
           const result  = await MoviesData.find()
           res.render("index",{data:result});
      }
      catch(error){
           console.log(error);
      }
  }

  static editDocById = async(req,res)=>{
      try{
         const result = await MoviesData.findById(req.params.id);
         res.render('edit',{data:result});
         res.redirect('/');

      }
      catch(error){
          console.log(error);
      }
}
 
static updateDocById = async(req,res)=>{
   
    try{
        const result = await MoviesData.findByIdAndUpdate(req.params.id,req.body);

        res.redirect('/');
    }
    catch(error){
      console.log(error);
    }
}

static deleteDocById = async(req,res)=>{
    try{
        const result = await MoviesData.findByIdAndDelete(req.params.id);
        console.log(result);
        res.redirect('/');
    }
    catch(error){
        console.log(error);
    }
}
}

export default moviecontroller;