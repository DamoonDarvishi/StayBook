import type { Request, Response } from "express";
import type { ApiError } from "@staybook/types";

export function notFoundMiddleware(_req: Request, res: Response): void {
  const response: ApiError = {
    error: "Route not found",
    code: "NOT_FOUND",
    statusCode: 404,
  };
  res.status(404).json(response);
}
