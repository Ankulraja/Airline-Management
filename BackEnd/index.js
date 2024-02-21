const express = require('express')
const app = express();
const dbConnect =  require("./Config/Database")
const cloudinaryConnect = require("./Config/Cloudinary");
const userRouter = require ("./Router/UserRouter")
require("dotenv").config();

app.use(express.json());
dbConnect();
cloudinaryConnect();

app.use("/api/v1/auth",userRouter)

app.listen(process.env.PORT ,()=>{
    console.log("Port listening", process.env.PORT)
})
