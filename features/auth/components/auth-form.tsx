"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Button } from "../../../components/ui/button";
import { StatusBanner } from "../../../components/ui/status-banner";
import { signInAction, signUpAction } from "../actions";
import { initialAuthActionState } from "../types";

type AuthFormProps = {
  mode: "sign-in" | "sign-up";
};

export function AuthForm({ mode }: AuthFormProps) {
  const isSignIn = mode === "sign-in";
  const action = isSignIn ? signInAction : signUpAction;
  const [state, formAction, pending] = useActionState(action, initialAuthActionState);

  return (
    <form action={formAction} className="auth-form">
      <div className="field">
        <div className="field-heading">
          <label htmlFor="email">Email</label>
        </div>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          required
        />
      </div>

      <div className="field">
        <div className="field-heading">
          <label htmlFor="password">Password</label>
          <span className="field-hint">8+ characters</span>
        </div>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete={isSignIn ? "current-password" : "new-password"}
          minLength={8}
          maxLength={128}
          required
        />
      </div>

      {state.status === "error" ? (
        <StatusBanner tone="error">{state.message}</StatusBanner>
      ) : null}

      <Button type="submit" disabled={pending}>
        {pending ? "Please wait…" : isSignIn ? "Sign in" : "Create account"}
      </Button>

      <p className="auth-switch muted">
        {isSignIn ? "New to Knowledge Hub? " : "Already have an account? "}
        <Link href={isSignIn ? "/auth/sign-up" : "/auth/sign-in"}>
          {isSignIn ? "Create an account" : "Sign in"}
        </Link>
      </p>
    </form>
  );
}
