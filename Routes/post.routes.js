import { Router } from "express";
import { createPost, deletePost, getAllPosts, getPostBySlug, updatePost } from "../controllers/post.controller.js";
import auth from "../middlewares/auth.js";


const blogPostRouter = Router();

//post a blog
blogPostRouter.post("/postBlog",auth,createPost);

//return all blog posts
blogPostRouter.get("/viewBlogs",getAllPosts)

//get a blog by slug
blogPostRouter.get("/readBlog/:slug",getPostBySlug)

//update a blog post
blogPostRouter.patch("/editBlog/:id",auth, updatePost)

//delete a blog post
blogPostRouter.delete("/removeBlog/:id",auth, deletePost)


export default blogPostRouter;