import express from "express";
import connectDb from "./config/db.js";
import adminRouter from "./Routes/admin.routes.js";
import blogPostRouter from "./Routes/post.routes.js";
import projectRouter from "./Routes/project.router.js";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import { cloudinaryConfig } from "./config/cloudinary.js";

//loading environment variables
dotenv.config();

//port 
const port = process.env.PORT || 4010;

//connect to mongodb
connectDb();

//global middleware
const app = express();
app.use(express.json());

//img file upload
app.use(fileUpload({useTempFiles:true}));
cloudinaryConfig();


//Admin routes
app.use('/api/admin', adminRouter);

//Posts routes
app.use('/api/posts', blogPostRouter);

//Project Routes
app.use("/api/projects", projectRouter)






app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})