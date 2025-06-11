import cloudinary from '../config/cloudinary.js'
import { projectModel } from '../models/project.model.js';


export const createProject = async(req,res,next)=>{
    try {
        let imageUrl;
        if(req.files?.image){
            const result = await cloudinary.uploader.upload(req.files.image.tempFilePath);
            imageUrl=result.secure_url;
        }
        
        const project = new projectModel({
            ...req.body,imageUrl});
            await project.save();
        res.json(project)
    } catch (error) {
        next(error);
    }
}

export const getAllProjects =async(req,res,next)=>{
 try {
    const projects = await projectModel.find().sort({createdAt:-1});
    if(!projects){
       res.status(404).json({message:'Project not found!'})
    }
    res.json(projects)
 } catch (error) {
    next(error)
 }
}

export const getProjectBySlug = async(req, res, next)=>{
    try {
        const project = await projectModel.findOne({slug: req.params.slug});
        if (!project){
            res.status(404).json({message:'Project not found!'})
        }
        res.json(project)
    } catch (error) {
        next(error)
        
    }
}

export const updateProject = async(req, res, next)=>{
    try {
        let imageUrl = req.body.image;
        if(req.files?.image){
            const result = await cloudinary.uploader.upload(req.files.image.tempFilePath);
            imageUrl=result.secure_url;
        }
    
        const updatedProject = await projectModel.findByIdAndUpdate(req.params.id,{
             ...req.body, imageUrl},
             {new:true});
        if(!updatedProject){
            res.status(404).json({message:`Project not found!`})
        }
        res.json(updatedProject)
    } catch (error) {
        next(error)
    }
}

export const deleteProject = async(req,res,next)=>{
    try {
        const project = await projectModel.findByIdAndDelete(req.params.id);
        if(!project){
            res.status(400).json({message:`Project not found!`})
        }
        res.status(200).json({message: 'Project is Deleted!'})
    } catch (error) {
        next(error)
    }
}