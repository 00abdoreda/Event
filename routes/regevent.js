const express = require("express")
const studentsController=require("../Controllers/eventregController")
const route=express.Router()

route.post("/",studentsController.addnewevent)
route.get("/:id",studentsController.getallstudentsreg)

module.exports=route;