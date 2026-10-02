const userModels = require("../Models/UserModels");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRETE;

const register = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    let user = await userModels.findOne({ email: email });

    if (user) return res.status(409).json("fail");

    const hashpassword = await bcrypt.hash(password, 10);

    await userModels.create({
        firstname,
        lastname,
        email,
        password: hashpassword
    });

    res.status(201).json("success");
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModels.findOne({ email });

        if (!user) {
            return res.status(404).json("User not found");
        }

        const ismatch = await bcrypt.compare(password, user.password);

        if (!ismatch) {
            return res.status(401).json("Incorrect password");
        }

        const token = jwt.sign(
            { _id: user._id },
            JWT_SECRET
        );

        return res
            .status(200)
            .cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 150 * 60 * 1000
            })
            .json({
                message: "success"
            });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};

const viewuser = async(req,res)=>{

    await userModels.find()
    .then(user=>res.json(user))
    .catch(error=>res.json(error))
}


const viewbyid = async(req,res)=>{

    const id = req.params.id
    
     await userModels.findById(id)

      .then(user=>res.json(user))
  n   .catch(err=>res.json(err))

}


const verifyusers = async(req,res)=>{

   await res.status(201).json("success")
}

const userid = async(req,res)=>{
    
    const token = req.cookies.token

    if(!token) return res.status(404).json("fail")

    const decode = await jwt.verify(token,JWT_SECRET)

    const userID = await decode._id;

    res.status(201).json(userID)
}



module.exports = {register,login,viewbyid,viewuser,verifyusers,userid}