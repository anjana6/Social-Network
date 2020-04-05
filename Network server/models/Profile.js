const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const porfileShema = Schema({
    user: {
        type:Schema.Types.ObjectId,
        ref: "User"
    },
    company:{
        type:String,
    },
    location:{
        type:String,

    },
    skills:{
        type:[String],
        required:true
    },
    education:[
        {
            School:{
                type:String,
                required:true
            },
            degree:{
                type:String,
                required:true
            }
        }
    ],
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Profile",porfileShema);