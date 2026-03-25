import { db } from "../db/index.js";
import type { SearchParams, SearchResult } from "@staybook/types";

export async function searchHotels(
  params: SearchParams,
): Promise<SearchResult> {
  const page = params.page ?? 1;
  const limit = params.limit ?? 10;
  const skip = (page - 1) * limit;

  const where = {
    city: {
      contains: params.city,
      mode: "insensitive" as const,
    },
    ...(params.minPrice && { pricePerNight: { gte: params.minPrice } }),
    ...(params.maxPrice && {
      pricePerNight: {
        ...(params.minPrice && { gte: params.minPrice }),
        lte: params.maxPrice,
      },
    }),
  };

  const [hotels, total] = await Promise.all([
    db.hotel.findMany({
      where,
      skip,
      take: limit,
      orderBy: { rating: "desc" },
      include: { roomTypes: true },
    }),
    db.hotel.count({ where }),
  ]);

  return {
    hotels: hotels as any,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  };
}

export async function getHotelById(id: string) {
  const hotel = await db.hotel.findUnique({
    where: { id },
    include: { roomTypes: true },
  });
  return hotel;
}
