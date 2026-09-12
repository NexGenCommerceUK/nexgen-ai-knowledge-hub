import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";

export async function requireUser() {
  const supabase = await createClient();
  const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();

  if (claimsError || !claimsData?.claims?.sub) {
    redirect("/auth/sign-in");
  }

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/auth/sign-in");
  }

  return user;
}
