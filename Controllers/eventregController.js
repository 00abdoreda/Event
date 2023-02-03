const events = require("../models/eventregmodelDB")
const path=require("path");

//add event from form 
let addnewevent=(req,res)=>{
    let ev=new events({name:req.body.name,age:req.body.age,collage:req.body.collage,grade:req.body.grade,ph:req.body.ph,eventid:req.body.eventid})
    ev.save().then(()=>{
        //res.sendFile(path.join(__dirname,"../public/pages/newevent.html"))
        //res.send("hello")
        //res.status(200).send(ev)
        res.send(ev);
        
        
        
        
    }).catch((err)=>{
        for(let e in err.errors){
            console.log(err.errors[e].message)
            res.status(400).send("Bad Request...")
        }
    })

}




//get all events and display in html
let getallstudentsreg=async(req,res)=>{
    let stdd=await events.find({eventid:req.params.id}).select({name:1,age:1,collage:1,grade:1,ph:1})
    if(!stdd) return res.status(404).send("not founded")
    
    res.status(200).render("Eventsreg.ejs",{stdd});
    //res.status(200).send(std)
    
    }




//get all event in json format





//update event from form



//get event by id in json format
module.exports={addnewevent,getallstudentsreg}