import { PrismaClient } from "@prisma/client";
import { config } from "../config/index.js";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db =
  globalThis.prisma ??
  new PrismaClient({
    log:
      config.nodeEnv === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (config.nodeEnv !== "production") {
  globalThis.prisma = db;
}
