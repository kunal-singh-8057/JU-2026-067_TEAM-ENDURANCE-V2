const contactModels =  require("../Models/ContactModels");



const contact = async(req,res)=>{

    const{name,email,phone,message} = req.body;
     await contactModels.create({
        name,email,phone,message
     });

     res.status(201).json("success");
}

module.exports = {contact};