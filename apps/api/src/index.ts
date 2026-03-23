import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import type { ApiResponse } from "@staybook/types";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(cors());
app.use(express.json());

// Health check — Railway and other platforms ping this to know your app is alive
app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// First typed route — notice ApiResponse<T> in action
app.get("/api/v1/hotels", (_req, res) => {
  const response: ApiResponse<{ message: string }> = {
    data: { message: "Hotel search coming in Phase 2" },
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Staybook API running on port ${PORT}`);
});
