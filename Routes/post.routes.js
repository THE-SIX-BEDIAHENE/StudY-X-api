import { Router } from "express";
import { createPost, deletePost, getAllPosts, getPostBySlug, updatePost } from "../controllers/post.controller.js";
import auth from "../middlewares/auth.js";


const blogPostRouter = Router();

//return all blog posts
blogPostRouter.get("/",getAllPosts)

//get a blog by slug
blogPostRouter.get("/:slug",getPostBySlug)

//post a blog
blogPostRouter.post("/",auth,createPost);

//update a blog post
blogPostRouter.patch("/:id",auth, updatePost)

//delete a blog post
blogPostRouter.delete("/:id",auth, deletePost)


export default blogPostRouter;