import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    imageURL : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    bookmark:{
        type:Boolean,
        default:false
    },
    // profilePic : {
    //     type: String,
    //     default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png'
    // }
})

export default mongoose.model('Post', PostSchema);