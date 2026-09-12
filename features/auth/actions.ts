"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import type { AuthActionState } from "./types";
import { validateCredentials } from "./validation";

export async function signInAction(
  _previousState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const validation = validateCredentials(formData);

  if (!validation.ok) {
    return { status: "error", message: validation.message };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword(validation.data);

  if (error) {
    return {
      status: "error",
      message: "We could not sign you in. Check your email and password and try again.",
    };
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signUpAction(
  _previousState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const validation = validateCredentials(formData);

  if (!validation.ok) {
    return { status: "error", message: validation.message };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp(validation.data);

if (error) {
  console.error("Supabase sign-up error:", {
    name: error.name,
    message: error.message,
    status: error.status,
    code: error.code,
  });

  if (error.code === "over_email_send_rate_limit") {
    return {
      status: "error",
      message:
        "Too many confirmation emails have been requested. Please wait and try again later.",
    };
  }

  return {
    status: "error",
    message:
      "We could not create the account. Please check your details and try again.",
  };
}

  revalidatePath("/", "layout");

  if (data.session) {
    redirect("/dashboard");
  }

  redirect("/auth/check-email");
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
