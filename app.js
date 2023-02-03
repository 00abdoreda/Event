const { application } = require("express");
const StudentRouter=require("./routes/events")
const StudentRouter2=require("./routes/events2")
const StudentRouterReg=require("./routes/regevent")
const express = require("express");
const helmet=require("helmet")
const ejs = require("ejs")
const app =express();
const port =process.env.PORT||5000;
const mongoos = require("mongoose")
mongoos.set('strictQuery', true);

mongoos.connect("mongodb://0.0.0.0:27017/Events",{

useNewUrlParser:true,
useUnifiedTopology:true,
//useCreateIndex:true,
//useFindAndModify:false

}).then(()=>{

    console.log("connected")
}).catch((err)=>{
console.log(err)

})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(helmet())
app.use("/api/regevents",StudentRouterReg)
app.use("/api/events",StudentRouter)
app.use("/api2/events",StudentRouter2)

app.set("template engine","ejs")
app.set("views","temp")
const path=require("path");

app.get("/",(req,res)=>{
    res.set("Access-Control-Allow-Origin","*");


    console.log("requist recived");
    //res.send("server response")
    res.sendFile(path.join(__dirname,"./public/pages/newevent.html"));
;
})
app.get("/api/assets/css/nucleo-icons.css",(req,res)=>{
    res.set("Access-Control-Allow-Origin","*");


    console.log("requist recived");
    //res.send("server response")
    res.sendFile(path.join(__dirname,"./public/assets/css/nucleo-icons.css"));

})
app.get("/api/assets/css/nucleo-svg.css",(req,res)=>{
    res.set("Access-Control-Allow-Origin","*");


    console.log("requist recived");
    //res.send("server response")
    res.sendFile(path.join(__dirname,"./public/assets/css/nucleo-svg.css"));

})
app.get("/api/assets/css/material-kit.css",(req,res)=>{
    res.set("Access-Control-Allow-Origin","*");


    console.log("requist recived");
    //res.send("server response")
    res.sendFile(path.join(__dirname,"./public/assets/css/material-kit.css"));

})

app.listen(port,()=>{
    console.log(`listin!!! to port ${port}`);
})