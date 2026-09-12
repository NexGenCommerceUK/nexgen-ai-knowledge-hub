export type AppErrorCode =
  | "BAD_REQUEST"
  | "VALIDATION_ERROR"
  | "AI_UNAVAILABLE"
  | "INTERNAL_ERROR";

export class AppError extends Error {
  readonly code: AppErrorCode;
  readonly status: number;
  readonly details?: Record<string, unknown>;

  constructor(
    code: AppErrorCode,
    message: string,
    status: number,
    details?: Record<string, unknown>,
  ) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.status = status;
    this.details = details;
  }
}

export function toAppError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error;
  }

  console.error("Unhandled application error", error);

  return new AppError(
    "INTERNAL_ERROR",
    "Something went wrong. Please try again.",
    500,
  );
}
