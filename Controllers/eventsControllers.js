const events = require("../models/eventModelDB")
const path=require("path");

        


//add event from form 
let addnewevent=(req,res)=>{
    const pathh = req.file.filename;

    let ev=new events({title:req.body.title,description:req.body.description,location:req.body.location,duration:req.body.duration,punchLine1:req.body.punchLine1,punchLine2:req.body.punchLine2,categoryIds:req.body.categoryIds,img:pathh})
    ev.save().then(()=>{
        //res.sendFile(path.join(__dirname,"../public/pages/newevent.html"))
        //res.send("hello")
        //res.status(200).send(ev)
        res.redirect('/');
        
        
        
        
    }).catch((err)=>{
        for(let e in err.errors){
            console.log(err.errors[e].message)
            res.status(400).send("Bad Request...")
        }
    })

}




//get all events and display in html
let getallstudents=async(req,res)=>{
    let std=await events.find().select({title:1,location:1,duration:1})
    if(!std) return res.status(404).send("not founded")
    
    res.status(200).render("Events.ejs",{std});
    //res.status(200).send(std)
    
    }




//get all event in json format





//update event from form



//get event by id in json format
module.exports={addnewevent,getallstudents}