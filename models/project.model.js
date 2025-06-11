import mongoose from 'mongoose'
import normalize  from 'normalize-mongoose'


const projectSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    // author:{
    //     type:String,
    //     default:'Admin'
    // },
},{timestamps:true})

projectSchema.plugin(normalize)

export const projectModel = mongoose.model('Project', projectSchema)