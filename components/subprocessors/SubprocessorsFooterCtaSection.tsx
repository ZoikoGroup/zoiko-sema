import Link from "next/link";

export function SubprocessorsFooterCtaSection() {
  return (
    <section className="bg-gradient-to-r from-violet-600 to-indigo-800 py-24 px-4 sm:px-6 lg:px-8 text-center text-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Sora'] leading-tight">
          Need subprocessor review or DPA<br className="hidden md:block" />support?
        </h2>
        <p className="text-purple-200 text-base font-['Plus_Jakarta_Sans'] leading-relaxed max-w-3xl mb-12">
          Request a privacy review, view the DPA, subscribe to change notices, or connect with the right team for
          enterprise procurement and legal questions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          <Link
            href="/data-processing-addendum"
            className="w-32 h-12 flex items-center justify-center bg-white text-indigo-800 text-base font-bold rounded-full font-['Plus_Jakarta_Sans'] hover:bg-gray-50 transition-colors"
          >
            View DPA
          </Link>
          <Link
            href="/privacy"
            className="w-44 h-12 flex items-center justify-center bg-white/10 text-white text-base font-bold rounded-full border border-white/40 font-['Plus_Jakarta_Sans'] hover:bg-white/20 transition-colors"
          >
            Contact privacy
          </Link>
          <Link
            href="/contact"
            className="h-12 flex items-center justify-center text-white text-base font-bold border-b border-white/50 font-['Plus_Jakarta_Sans'] hover:border-white transition-colors pb-1"
          >
            Contact sales
          </Link>
        </div>
      </div>
    </section>
  );
}
