const express = require("express")
const studentsController=require("../Controllers/eventsControllers")
const route=express.Router()
const path=require("path")
const multer = require("multer");
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')

    },
    filename:(req,file,cb)=>{
        console.log(file)
        cb(null,Date.now()+path.extname(file.originalname))
    }
})
const upload=multer({storage: storage})



route.post("/",upload.single("image"),studentsController.addnewevent)
route.get("/",studentsController.getallstudents)

module.exports=route;