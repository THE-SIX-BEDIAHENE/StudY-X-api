import { Router } from "express";
import { createProject, deleteProject, getAllProjects, getProjectBySlug, updateProject } from "../controllers/project.controller.js";
import auth from "../middlewares/auth.js";

const projectRouter = Router();

projectRouter.get("/",getAllProjects)

projectRouter.get("/:slug", getProjectBySlug)

projectRouter.post('/',auth, createProject)

projectRouter.patch("/:id",auth,updateProject)

projectRouter.delete('/:id',auth,deleteProject)


export default projectRouter;