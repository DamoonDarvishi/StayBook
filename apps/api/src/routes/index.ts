import { Router, type Router as RouterType } from "express";
import { hotelsRouter } from "./hotels.js";

export const apiRouter: RouterType = Router();

apiRouter.use("/hotels", hotelsRouter);
