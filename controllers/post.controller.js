import cloudinary from '../config/cloudinary.js'
import { blogPostModel } from '../models/post.model.js';

export const createPost = async(req,res,next)=>{
    try {
        let imageUrl;
        if (req.files?.image){
            const result = await cloudinary.uploader.upload(req.files.image.tempFilePath);
            imageUrl = result.secure_url;
    
            const post= new blogPostModel({...req.body, imageUrl});
            await post.save();
            res.status(200).json(post)
        }
    
    } catch (error) {
        res.status(500).json({message:error.message});
        next(error)
    }

};

export const getAllPosts= async(req,res,next)=>{
    try {
        const posts = await blogPostModel.find().sort({createdAt: -1});
        res.json(posts)
    } catch (error) {
        next(error)
    }
}

export const getPostBySlug = async(req,res,next)=>{
    try {
        const post = await blogPostModel.findOne({ slug: req.params.slug});
        if(!post){
            res.status(404).json({message:'Post not found!'})
        };
        res.json(post);
    } catch (error) {
        next(error)
        
    }
}

export const updatePost= async(req, res, next)=>{
    try {
        let imageUrl = req.body.imageUrl;
        if (req.files?.image){
            const result = await cloudinary.uploader.upload(req.files.image.tempFilePath);
            imageUrl = result.secure_url;
        }
    
        const updatedPost = await blogPostModel.findByIdAndUpdate(
            req.params.id,
            {...req.body, imageUrl},
            {new:true}
        );
        if(!updatedPost){
            res.status(404).json('Post not found!');
        }
    } catch (error) {
        next(error)
    }
}

export const deletePost = async(req,res,next)=>{
   try {
     const post = await blogPostModel.findByIdAndDelete(req.params.id);
     if(!post){
         res.status(404).json('Post not found!');
     }
     res.status(200).json({message:'Post Deleted Successfully'});
   } catch (error) {
    next(error)
    
   }

}