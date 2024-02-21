const express= require("express")
const router = express.Router();

const {OtpGenerator,signup,login} = require("../Controller/Auth");

router.post("/OtpGenerator",OtpGenerator);
// router.post("/OtpGenerator",()=>{
//     console.log("Hello")
// });
router.post("/signup",signup);
router.post("/login",login);

module.exports = router;