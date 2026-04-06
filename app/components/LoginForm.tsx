"use client";

function EnvelopeIcon() {
  return (
    <svg className="size-5 shrink-0 text-[var(--pcl-blue)]" viewBox="0 0 24 24" fill="none" aria-hidden>
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

function LockIcon() {
  return (
    <svg className="size-5 shrink-0 text-[var(--pcl-blue)]" viewBox="0 0 24 24" fill="none" aria-hidden>
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

function NotchedField({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="pointer-events-none absolute -top-2.5 left-3 z-10 bg-white px-1 text-xs font-semibold text-[var(--pcl-grey)]"
      >
        {label}
      </label>
      <div className="flex min-h-[52px] items-center gap-3 rounded-[6px] border-2 border-[var(--pcl-blue)] bg-white px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-[border-color,box-shadow] hover:border-[var(--pcl-hover-accent)] focus-within:border-[var(--pcl-blue)] focus-within:ring-2 focus-within:ring-[var(--pcl-pink-ring)]">
        {children}
      </div>
    </div>
  );
}

export function LoginForm() {
  return (
    <form className="flex w-full max-w-md flex-col gap-5" action="#" method="post">
      <NotchedField id="email" label="Email Id">
        <EnvelopeIcon />
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="thisuix@mail.com"
          required
          className="min-w-0 flex-1 border-0 bg-transparent text-sm text-[var(--pcl-neutral-dark)] outline-none placeholder:text-[var(--pcl-neutral-light)]"
        />
      </NotchedField>

      <NotchedField id="password" label="Password">
        <LockIcon />
        <input
          id="password"
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

      {/* Pill outline CTA — matches FIND A CRUISE–style capsule; brand pink border */}
      <button
        type="submit"
        className="w-full rounded-full border-[3px] border-[var(--pcl-pink)] bg-white py-3.5 text-center text-sm font-bold uppercase tracking-[0.12em] text-[var(--pcl-neutral-dark)] shadow-none transition-colors duration-200 hover:bg-[var(--pcl-pink)] hover:text-white"
      >
        LOGIN
      </button>

      <div className="flex justify-center pt-1">
        <a
          href="tel:+18884030301"
          className="text-center text-sm font-medium text-[var(--pcl-neutral-dark)] no-underline decoration-transparent visited:text-[var(--pcl-neutral-dark)] transition-colors hover:text-[var(--pcl-hover-accent)] focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pcl-pink)] focus-visible:ring-offset-2"
        >
          Contact Support - +1 888 403 0301
        </a>
      </div>
    </form>
  );
}
