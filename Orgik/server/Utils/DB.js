const mongoose = require("mongoose");
const MONGODB = process.env.MONGODB;

const ConnectDB = ()=>{
    mongoose.connect(`${MONGODB}`).then(()=>{
        console.log("DataBase Connected Successfully")
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = ConnectDB;