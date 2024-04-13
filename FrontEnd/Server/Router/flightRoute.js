const express = require("express")
const router = express.Router();


const{createFlightData,getAllFlightData,deleteFlightData,modifyFlightData} = require("../Controller/flight")


router.get('/getAllFlightData',getAllFlightData)

// router.post('/modifyFlightData',()=>{
//     console.log("Hello")
// })

router.post("/createFlightData",createFlightData)
router.post("/modifyFlightData",modifyFlightData)
router.post("/deleteFlightData",deleteFlightData)


module.exports = router;