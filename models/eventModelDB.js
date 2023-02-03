const mongoos = require("mongoose")
mongoos.set('strictQuery', true);

const eventSchema = new  mongoos.Schema({

    title:{type:String,
        required:true
    
    },
    description:{type:String,
        required:true
    
    },
    location:{type:String,
        required:true
    
    },
    duration:{type:String,
        required:true
    
    },
    punchLine1:{type:String,
        required:true
    
    },
    punchLine2:{type:String,
        required:true
    
    },
    categoryIds:{
        type:Array,
        required:true
    },
    img:{
        type:String,
        require:true

    }


    
    
})
const Events= mongoos.model("events",eventSchema)


module.exports=Events;