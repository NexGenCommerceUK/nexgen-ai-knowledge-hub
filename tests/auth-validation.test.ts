import { describe, expect, it } from "vitest";
import { validateCredentials } from "../features/auth/validation";

function credentials(email: string, password: string) {
  const formData = new FormData();
  formData.set("email", email);
  formData.set("password", password);
  return formData;
}

describe("validateCredentials", () => {
  it("normalizes a valid email", () => {
    const result = validateCredentials(credentials("  USER@Example.COM ", "password123"));

    expect(result).toEqual({
      ok: true,
      data: { email: "user@example.com", password: "password123" },
    });
  });

  it("rejects malformed emails", () => {
    const result = validateCredentials(credentials("not-an-email", "password123"));

    expect(result).toEqual({ ok: false, message: "Enter a valid email address." });
  });

  it("requires at least eight password characters", () => {
    const result = validateCredentials(credentials("user@example.com", "short"));

    expect(result).toEqual({
      ok: false,
      message: "Password must be at least 8 characters.",
    });
  });
});
