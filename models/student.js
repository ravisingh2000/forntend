
const mongoose = require('mongoose');
const bcrypt = require("bcrypt")
const students = new mongoose.Schema({
        "FirstName": String,
        "LastName":  String,
        "email": String,
        "Password": String,
        "College":String

});
students.pre("save", async function (next) {
        console.log(this)
        console.log("hhhhhhhhhhhhhhhhhhhhhjuuyy")
        console.log(this.FirstName)
        try{
        this.Password = await bcrypt.hash(this.Password, 10)
        }
        catch(error){
                console.log(error)
        }
        next();
})
students.pre("findOneAndUpdate", async function (next) {
        try{
        const data = this.getUpdate().$set.Password = await bcrypt.hash(this.getUpdate().$set.Password, 10);
        }
        catch(error){

        }
        next();
})
const student = new mongoose.model("students", students);
module.exports = student;