const mongoos = require("mongoose")
mongoos.set('strictQuery', true);

const eventSchema = new  mongoos.Schema({

    name:{type:String,
        required:true
    
    },
    age:{type:String,
        required:true
    
    },
    collage:{type:String,
        required:true
    
    },
    grade:{type:String,
        required:true
    
    },
    ph:{type:String,
        required:true
    
    },
    eventid:{type:String,
        required:true
    
    },
   

    
    
})
const Eventss= mongoos.model("eventsreg",eventSchema)


module.exports=Eventss;