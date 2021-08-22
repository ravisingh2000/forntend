const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken")
// const cookieParser = require("cookie-parser")

router.get("/valid", async (req, res) => {
    try {
            const token = req.cookies.mainproject;
            await jwt.verify(token, "ravisingh");
            console.log("dfhhhhhhhhhhhhhhhhhhhhhhhhhhhkjjjjjjjjjjjhhhhhh")
           
            res.json({
                    value: true
            })
    }
    catch (e) {
            console.log(e)
            console.log("dfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
            res.json({
                    value: false
            })
    }
})
module.exports=router;