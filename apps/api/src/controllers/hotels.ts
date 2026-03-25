import type { Request, Response, NextFunction } from "express";
import type { Amenity, ApiResponse, SearchParams } from "@staybook/types";
import { searchHotels, getHotelById } from "../services/hotels.js";
import { AppError } from "../middleware/error.js";

export async function searchHotelsController(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const params: SearchParams = {
      city: (req.query.city as string) ?? "",
      checkIn: (req.query.checkIn as string) ?? "",
      checkOut: (req.query.checkOut as string) ?? "",
      guests: parseInt(req.query.guests as string) || 1,
      page: req.query.page ? parseInt(req.query.page as string) : 1,
      limit: req.query.limit ? parseInt(req.query.limit as string) : 10,
    };

    // Optional properties added only when present — key is never set to undefined
    if (req.query.minPrice) {
      params.minPrice = parseFloat(req.query.minPrice as string);
    }
    if (req.query.maxPrice) {
      params.maxPrice = parseFloat(req.query.maxPrice as string);
    }
    if (req.query.amenities) {
      params.amenities = (req.query.amenities as string).split(
        ",",
      ) as Amenity[];
    }

    const result = await searchHotels(params);
    const response: ApiResponse<typeof result> = { data: result };
    res.json(response);
  } catch (err) {
    next(err);
  }
}

export async function getHotelController(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const { id } = req.params;
    if (!id) {
      throw new AppError("Missing hotel id", 400, "MISSING_ID");
    }

    const hotel = await getHotelById(id);
    if (!hotel) {
      throw new AppError("Hotel not found", 404, "HOTEL_NOT_FOUND");
    }

    const response: ApiResponse<typeof hotel> = { data: hotel };
    res.json(response);
  } catch (err) {
    next(err);
  }
}
