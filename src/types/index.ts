/**
 * Shared TypeScript types. Align with backend schemas / OpenAPI.
 * Add per-module files: money.ts, resume.ts, etc.
 */

export interface ApiError {
  error: { code: string; message: string; details?: unknown };
}
