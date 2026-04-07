"use client";

import { useState } from "react";

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "size-5 shrink-0 text-[var(--pcl-blue)]"}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "size-5 shrink-0 text-[var(--pcl-blue)]"}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "size-4 shrink-0"}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92Z"
      />
    </svg>
  );
}

function NotchedField({
  id,
  label,
  children,
  variant = "default",
  trailing,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  variant?: "default" | "hero2";
  trailing?: React.ReactNode;
}) {
  const shellClasses =
    variant === "hero2"
      ? "border-[var(--pcl-blue)] hover:border-[var(--pcl-blue)] focus-within:border-[var(--pcl-blue)] focus-within:ring-2 focus-within:ring-[var(--pcl-pink-ring)]"
      : "border-[var(--pcl-blue)] hover:border-[var(--pcl-hover-accent)] focus-within:border-[var(--pcl-blue)] focus-within:ring-2 focus-within:ring-[var(--pcl-pink-ring)]";

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="pointer-events-none absolute -top-2.5 left-5 z-10 bg-white px-1 text-xs font-semibold text-[var(--pcl-grey)]"
      >
        {label}
      </label>
      <div
        className={`login-field-shell flex min-h-[52px] items-center gap-3 rounded-full border-2 bg-white px-5 py-3 transition-[border-color,box-shadow] ${shellClasses}`}
      >
        {children}
        {trailing}
      </div>
    </div>
  );
}

export type LoginFormProps = {
  /** Prefix for input `id`s when multiple forms exist on one page (e.g. `hero2-`). */
  idPrefix?: string;
  /** `hero2` matches the alternate split-panel reference (navy borders, brand pink CTA). */
  variant?: "default" | "hero2";
};

export function LoginForm({ idPrefix = "", variant = "default" }: LoginFormProps) {
  const [mode, setMode] = useState<"login" | "create">("login");
  const isCreateMode = mode === "create";
  const emailId = `${idPrefix}${mode}-email`;
  const passwordId = `${idPrefix}${mode}-password`;
  const iconClass = variant === "hero2" ? "size-5 shrink-0 text-[var(--pcl-blue)]" : undefined;
  const panelTitle = isCreateMode ? "Create Account" : "Member Login";
  const submitLabel = isCreateMode ? "CREATE ACCOUNT" : "LOGIN";
  const supportLabel = isCreateMode ? "Need help creating your account?" : "Need help signing in?";

  return (
    <form className="flex w-full max-w-md flex-col gap-5" action="#" method="post">
      <div className="flex flex-col items-center gap-4">
        <div
          className="inline-flex rounded-full border border-[color-mix(in_srgb,var(--pcl-blue)_12%,white)] bg-[color-mix(in_srgb,var(--pcl-blue)_8%,white)] p-1"
          aria-label="Account access mode"
        >
          <button
            type="button"
            className={`rounded-full px-5 py-2 text-sm font-bold tracking-[0.02em] transition-colors ${
              !isCreateMode
                ? "bg-white text-[var(--pcl-blue)] shadow-[0_4px_16px_rgba(2,53,150,0.12)]"
                : "text-[#5A6673] hover:text-[var(--pcl-blue)]"
            }`}
            onClick={() => setMode("login")}
          >
            Member Login
          </button>
          <button
            type="button"
            className={`rounded-full px-5 py-2 text-sm font-bold tracking-[0.02em] transition-colors ${
              isCreateMode
                ? "bg-white text-[var(--pcl-blue)] shadow-[0_4px_16px_rgba(2,53,150,0.12)]"
                : "text-[#5A6673] hover:text-[var(--pcl-blue)]"
            }`}
            onClick={() => setMode("create")}
          >
            Create Account
          </button>
        </div>

        <h2 className="font-pcl-display text-3xl font-black tracking-tight text-[var(--pcl-blue)] sm:text-[2.2rem]">
          {panelTitle}
        </h2>
      </div>

      <div>
      <NotchedField id={emailId} label="Email Id" variant={variant}>
        <EnvelopeIcon className={iconClass} />
        <input
          id={emailId}
          name="email"
          type="email"
          autoComplete="email"
          placeholder="thisuix@mail.com"
          required
          className="min-w-0 flex-1 border-0 bg-transparent text-sm text-[var(--pcl-neutral-dark)] outline-none placeholder:text-[var(--pcl-neutral-light)]"
        />
      </NotchedField>

        <div className="mt-5">
          <NotchedField id={passwordId} label="Password" variant={variant}>
            <LockIcon className={iconClass} />
            <input
              id={passwordId}
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="min-w-0 flex-1 border-0 bg-transparent text-sm text-[var(--pcl-neutral-dark)] outline-none placeholder:text-[var(--pcl-neutral-light)]"
            />
          </NotchedField>
        </div>

      </div>

      <button
        type="submit"
        className={
          variant === "hero2"
            ? "w-full cursor-pointer rounded-full border-0 bg-[var(--pcl-pink)] py-3.5 text-center text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_2px_8px_rgba(230,0,96,0.35)] transition-[background-color,box-shadow,transform,filter] hover:brightness-110 active:scale-[0.98] active:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--pcl-pink-dark)]"
            : "login-submit-btn w-full cursor-pointer rounded-full border-0 py-3.5 text-center text-sm font-bold uppercase tracking-[0.12em]"
        }
      >
        {submitLabel}
      </button>

      <div className="flex min-h-4 justify-center">
        {!isCreateMode ? (
          <a
            href="#"
            className="text-xs font-medium text-[var(--pcl-grey)] no-underline transition-colors hover:text-[var(--pcl-hover-accent)]"
          >
            Forgot your password?
          </a>
        ) : <span aria-hidden className="invisible text-xs">Placeholder</span>}
      </div>

      <div className="flex flex-col items-center gap-2 pt-1">
        <p className="min-h-8 text-center text-xs font-medium uppercase tracking-[0.08em] text-[#7A7A7A]">
          {supportLabel}
        </p>
        <a
          href="tel:+18884030301"
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-center text-sm font-semibold no-underline transition-[border-color,background-color,color,transform] hover:-translate-y-0.5 hover:text-[var(--pcl-hover-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            variant === "hero2"
              ? "border-[var(--pcl-pink)] bg-[var(--pcl-pink-surface-hover)] text-[#555555] visited:text-[#555555] focus-visible:ring-[var(--pcl-pink)]"
              : "border-[var(--pcl-blue)]/15 bg-[var(--pcl-blue)]/4 text-[var(--pcl-neutral-dark)] visited:text-[var(--pcl-neutral-dark)] focus-visible:ring-[var(--pcl-pink)]"
          }`}
        >
          <PhoneIcon className="size-4 shrink-0 text-[var(--pcl-pink)]" />
          <span>Call support: +1 888 403 0301</span>
        </a>
      </div>
    </form>
  );
}
