import mongoose from 'mongoose';
import normalize from 'normalize-mongoose'

const blogPostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true, 
        unique:true,
    },
    content:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    author:{
        type:String,
        default:'Admin'
    }
},{timestamps:true});

blogPostSchema.plugin(normalize)

export const blogPostModel = mongoose.model('Post', blogPostSchema)
