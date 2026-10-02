const letterModel =  require("../Models/LetterModels");



const subscribe = async(req,res)=>{

    const{subscribe} = req.body;
     await letterModel.create({
        subscribe
     });

     res.status(201).json("success");
}

module.exports = {subscribe}