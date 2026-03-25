import type { Request, Response, NextFunction } from "express";
import type { ApiError } from "@staybook/types";

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number,
    public code: string,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof AppError) {
    const response: ApiError = {
      error: err.message,
      code: err.code,
      statusCode: err.statusCode,
    };
    res.status(err.statusCode).json(response);
    return;
  }

  console.error("Unhandled error:", err);
  const response: ApiError = {
    error: "Internal server error",
    code: "INTERNAL_ERROR",
    statusCode: 500,
  };
  res.status(500).json(response);
}
