require("dotenv").config();
const express = require("express");
const app =require("../server/App/app");
const PORT = process.env.PORT;
const ConnectDB = require("../server/Utils/DB");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const UserRouter = require("../server/Routes/UserRoutes");
const UpdateRoutes = require("../server/Routes/UpdatesRoutes");
const ContactRoutes = require("../server/Routes/ContactRoutes");

app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))
app.use(cookieparser());
app.use("/api/v1",UserRouter);
app.use("/api/v1",UpdateRoutes);
app.use("/api/v1",ContactRoutes);

ConnectDB();

app.listen(`${PORT}`,()=>{
    console.log(`The server is running at http://localhost:${PORT}`);
})