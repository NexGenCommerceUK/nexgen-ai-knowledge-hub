import type { ReactNode } from "react";
import { AppShell } from "../../components/layout/app-shell";
import { requireUser } from "../../features/auth/require-user";

export default async function ProtectedLayout({ children }: { children: ReactNode }) {
  const user = await requireUser();

  return <AppShell email={user.email ?? "Signed-in user"}>{children}</AppShell>;
}
