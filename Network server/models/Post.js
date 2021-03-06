const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    imageId:{
        type:String
    },
    imageUrl:{
        type:String
    },
    text:{
        type:String,
    },
    name:{
        type:String
    },
    avatar:{
        type:String
    },
    likes:[
       {
           userId:{
               type: Schema.Types.ObjectId,
               ref: "User"
           }
       }
    ],
    comment:[
        {
            userId:{
                type:Schema.Types.ObjectId,
                ref:"User"
            },
            text:{
                type:String,
                required:true
            },
            name:{
                type:String,
            },
            avatar:{
                type:String,
            },
            date:{
                type:Date,
                default:Date.now
            }
        }
    ],
    date:{
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post',postSchema);