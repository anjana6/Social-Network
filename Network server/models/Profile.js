const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const porfileShema = Schema({
    user: {
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    workplace:{
        type:String,
    },
    currentcity:{
        type:String,
        required:true

    },
    hometown:{
        type:String,
        required:true
    },
    skills:{
        type:[String],
        required:true
    },
    primeryschool:{
        type:String,
    },
    secondaryschool:{
        type:String,
        required:true
    },
    university:{
        type:String,
    },
    birthday:{
        type:Date
    },
    religious:{
        type:String
    },
    gender:{
        type:String
    },
    sivilstatus:{
        type:String
    },
    mobileNo:{
        type:String
    },
    telNo:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Profile",porfileShema);