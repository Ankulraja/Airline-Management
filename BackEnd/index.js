const express = require('express')
const app = express();
const dbConnect =  require("./Config/Database")
const cloudinaryConnect = require("./Config/Cloudinary");
require("dotenv").config();

app.use(express.json());


dbConnect();
cloudinaryConnect();

app.listen(process.env.PORT ,()=>{
    console.log("Port listening", process.env.PORT)
})
