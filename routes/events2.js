const express = require("express")
const studentsController=require("../Controllers/eventsController2")
const route=express.Router()
const path=require("path")
route.get("/",studentsController.getallstudents)

module.exports=route;