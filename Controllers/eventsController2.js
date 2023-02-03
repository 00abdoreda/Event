const events = require("../models/eventModelDB")
const path=require("path");
//get all events and display in html
let getallstudents=async(req,res)=>{
    let std=await events.find().select({title:1,location:1,duration:1,description:1,punchLine1:1,
        punchLine2:1,categoryIds:1,img:1 })
    if(!std) return res.status(404).send("not founded")
    
    res.status(200).send(std);
    //res.status(200).send(std)
    
    }




//get all event in json format





//update event from form



//get event by id in json format
module.exports={getallstudents}