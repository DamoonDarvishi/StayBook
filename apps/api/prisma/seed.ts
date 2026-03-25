import * as dotenv from "dotenv";
dotenv.config();

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  await db.hotel.createMany({
    data: [
      {
        name: "Grand Munich Hotel",
        description: "Luxury hotel in the heart of Munich",
        address: "Maximilianstrasse 12",
        city: "Munich",
        country: "Germany",
        lat: 48.1351,
        lng: 11.582,
        pricePerNight: 180,
        rating: 4.7,
        reviewCount: 342,
        images: ["https://picsum.photos/seed/hotel1/800/600"],
        amenities: ["wifi", "parking", "gym", "restaurant"],
      },
      {
        name: "Berlin Boutique",
        description: "Stylish boutique hotel near Mitte",
        address: "Unter den Linden 5",
        city: "Berlin",
        country: "Germany",
        lat: 52.52,
        lng: 13.405,
        pricePerNight: 120,
        rating: 4.4,
        reviewCount: 189,
        images: ["https://picsum.photos/seed/hotel2/800/600"],
        amenities: ["wifi", "airConditioning"],
      },
    ],
  });
  console.log("Seeded hotels ✓");
}

main()
  .catch(console.error)
  .finally(() => db.$disconnect());
