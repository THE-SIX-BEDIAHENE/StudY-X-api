import { Router } from "express";
import { loginAdmin, /**registerAdmin*/ } from "../controllers/admin.controller.js";


const adminRouter = Router();

adminRouter.post("/login", loginAdmin);

export default adminRouter;