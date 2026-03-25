import express from "express";
import cors from "cors";
import { config } from "./config/index.js";
import { apiRouter } from "./routes/index.js";
import { errorMiddleware } from "./middleware/error.js";
import { notFoundMiddleware } from "./middleware/notFound.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api/v1", apiRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(config.port, () => {
  console.log(`Staybook API running on port ${config.port}`);
});
