import { Router } from "express";
import { createProject, deleteProject, getAllProjects, getProjectBySlug, updateProject } from "../controllers/project.controller.js";
import auth from "../middlewares/auth.js";

const projectRouter = Router();


projectRouter.post('/newProjects', auth, createProject)

projectRouter.get("/listProjects", getAllProjects)

projectRouter.get("/readMore/:slug", getProjectBySlug)

projectRouter.patch("/editProjects/:id", auth, updateProject)

projectRouter.delete('/removeProject/:id', auth, deleteProject)


export default projectRouter;