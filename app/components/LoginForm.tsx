"use client";

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

function FieldTrailingSquare() {
  return (
    <span
      className="size-4 shrink-0 rounded-[2px] bg-[#8B4513]/85"
      aria-hidden
    />
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
      ? "border-[#1A365D] hover:border-[#1A365D] focus-within:border-[#1A365D] focus-within:ring-2 focus-within:ring-[#ED2088]/35"
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
  /** `hero2` matches the alternate split-panel reference (navy borders, #ED2088 CTA). */
  variant?: "default" | "hero2";
};

export function LoginForm({ idPrefix = "", variant = "default" }: LoginFormProps) {
  const emailId = `${idPrefix}email`;
  const passwordId = `${idPrefix}password`;
  const iconClass = variant === "hero2" ? "size-5 shrink-0 text-[#1A365D]" : undefined;
  const trailing = variant === "hero2" ? <FieldTrailingSquare /> : undefined;

  return (
    <form className="flex w-full max-w-md flex-col gap-5" action="#" method="post">
      <NotchedField id={emailId} label="Email Id" variant={variant} trailing={trailing}>
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

      <NotchedField id={passwordId} label="Password" variant={variant} trailing={trailing}>
        <LockIcon className={iconClass} />
        <input
          id={passwordId}
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          required
          className="min-w-0 flex-1 border-0 bg-transparent text-sm text-[var(--pcl-neutral-dark)] outline-none placeholder:text-[var(--pcl-neutral-light)]"
        />
      </NotchedField>

      <div className="flex justify-center">
        <a
          href="#"
          className="text-xs font-medium text-[var(--pcl-grey)] no-underline transition-colors hover:text-[var(--pcl-hover-accent)]"
        >
          Forgot your password?
        </a>
      </div>

      <button
        type="submit"
        className={
          variant === "hero2"
            ? "w-full cursor-pointer rounded-full border-0 bg-[#ED2088] py-3.5 text-center text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_2px_8px_rgba(237,32,136,0.35)] transition-[background-color,box-shadow,transform,filter] hover:brightness-110 active:scale-[0.98] active:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9177c]"
            : "login-submit-btn w-full cursor-pointer rounded-full border-0 py-3.5 text-center text-sm font-bold uppercase tracking-[0.12em]"
        }
      >
        LOGIN
      </button>

      <div className="flex justify-center pt-1">
        <a
          href="tel:+18884030301"
          className={`text-center text-sm font-medium no-underline decoration-transparent transition-colors hover:text-[var(--pcl-hover-accent)] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            variant === "hero2"
              ? "text-[#666666] visited:text-[#666666] focus-visible:ring-[#ED2088]"
              : "text-[var(--pcl-neutral-dark)] visited:text-[var(--pcl-neutral-dark)] focus-visible:ring-[var(--pcl-pink)]"
          }`}
        >
          Contact Support - +1 888 403 0301
        </a>
      </div>
    </form>
  );
}
