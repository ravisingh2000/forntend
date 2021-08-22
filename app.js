require('dotenv').config()
const express = require("express");
// const bcrypt = require("bcrypt")
const cors = require('cors')
var compression = require("compression");
// const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
require("./services/dbConect")
const app = express()
app.use(express.json())
app.use(cookieParser())
const students = require("./models/student");
const router=require("./routes/userApi")
const validrouter=require("./routes/auth")
app.use(router)
app.use(validrouter)

var corsOption={
        origin:"http://localhost:4200"
}
app.use(compression());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.get("/signout", async (req, res) => {
        res.clearCookie("mainproject");
        res.json({
                name: false
        })

})


app.listen(3000, () => {
        console.log("Server start at: " + "http://localhost:" + 3000 + "/")

})