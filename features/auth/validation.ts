export type Credentials = {
  email: string;
  password: string;
};

export type CredentialsValidation =
  | { ok: true; data: Credentials }
  | { ok: false; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateCredentials(formData: FormData): CredentialsValidation {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!emailPattern.test(email)) {
    return { ok: false, message: "Enter a valid email address." };
  }

  if (password.length < 8) {
    return { ok: false, message: "Password must be at least 8 characters." };
  }

  if (password.length > 128) {
    return { ok: false, message: "Password is too long." };
  }

  return { ok: true, data: { email, password } };
}
