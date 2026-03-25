import { Router, type Router as RouterType } from "express";
import {
  searchHotelsController,
  getHotelController,
} from "../controllers/hotels.js";

export const hotelsRouter: RouterType = Router();

hotelsRouter.get("/", searchHotelsController);
hotelsRouter.get("/:id", getHotelController);
