/**
 * Support callout section with a prominent phone number for account help.
 */
export function NeedHelpSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#D9E4F2] bg-[linear-gradient(180deg,#FFFFFF_0%,#F6FAFF_100%)] px-8 py-10 shadow-[0_24px_60px_rgba(0,43,73,0.08)] sm:px-12 sm:py-12 lg:px-16 lg:py-14">
        <div className="max-w-3xl">
          <h2 className="font-pcl-display text-4xl font-black leading-[0.96] tracking-tight text-[#124191] sm:text-5xl">
            Need help?
          </h2>

          <p className="mt-6 text-base leading-8 text-[#1F2937] sm:text-[1.05rem]">
            If you have questions about your account, package details, or next
            steps, our team is available to assist.
          </p>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6A7788]">
              Phone
            </p>
            <a
              href="tel:+18884030301"
              className="mt-2 inline-block font-pcl-display text-4xl font-black leading-none tracking-tight text-[#ED2088] no-underline transition-transform duration-300 hover:scale-[1.02] sm:text-5xl"
            >
              +1 888 403 0301
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
