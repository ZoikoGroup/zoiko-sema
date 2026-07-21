"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
}

export default function TalentCommunitySection() {
    const { ref: leftRef, inView: leftIn } = useInView(0.25);
    const { ref: formRef, inView: formIn } = useInView(0.2);

    return (
        <>
            <style>{`
        @keyframes tcFadeUp{
          from{
            opacity:0;
            transform:translateY(28px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes tcFadeRight{
          from{
            opacity:0;
            transform:translateX(36px);
          }
          to{
            opacity:1;
            transform:translateX(0);
          }
        }

        .tc-hidden{
          opacity:0;
          transform:translateY(28px);
        }

        .tc-visible{
          animation:tcFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .tc-hidden-right{
          opacity:0;
          transform:translateX(36px);
        }

        .tc-visible-right{
          animation:tcFadeRight .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .tc-card{
          transition:
            transform .35s ease,
            box-shadow .35s ease;
        }

        .tc-card:hover{
          transform:translateY(-4px);
          box-shadow:0 22px 48px rgba(0,0,0,.20);
        }

        .tc-btn{
          transition:
            transform .25s ease,
            background-color .25s ease,
            box-shadow .25s ease;
        }

        .tc-btn:hover{
          transform:translateY(-2px);
          background:#5D68E5;
          box-shadow:0 16px 32px rgba(79,91,213,.40);
        }

        @media(prefers-reduced-motion:reduce){

          .tc-hidden,
          .tc-hidden-right{
            opacity:1!important;
            transform:none!important;
          }

          .tc-visible,
          .tc-visible-right{
            animation:none!important;
          }

        }
      `}</style>

            <section id="community" className="overflow-hidden bg-[#4F46E5] py-10 dark:bg-[#0D0B24] sm:py-14">

                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-2">

                    {/* Left Content */}

                    <div
                        ref={leftRef}
                        className={`tc-hidden ${leftIn ? "tc-visible" : ""}`}
                    >

                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#C9CCFF]">
                            Talent Community
                        </p>

                        <h2 className="max-w-md text-[clamp(34px,5vw,52px)] font-bold leading-tight text-white">
                            Don't see the right role yet?
                        </h2>

                        <p className="mt-6 max-w-lg text-[15px] leading-8 text-indigo-100">
                            Join the Zoiko Sema talent community and we'll reach out
                            when a relevant role opens — no spam, just opportunities
                            that fit.
                        </p>

                        <p className="mt-8 flex items-start gap-3 text-[13px] leading-6 text-indigo-200">

                            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-200" />

                            <span>
                                Your details are handled per our Privacy Notice and
                                candidate data processing terms.
                            </span>

                        </p>

                    </div>

                    {/* Form Card */}

                    <div
                        ref={formRef}
                        style={{ animationDelay: ".1s" }}
                        className={`tc-hidden-right ${formIn ? "tc-visible-right" : ""
                            }`}
                    >
                        <div className="tc-card rounded-3xl bg-white p-6 shadow-2xl dark:border dark:border-white/10 dark:bg-[#151233]">

                            <form className="space-y-5">

                                {/* Name */}

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#172046] dark:text-white">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="h-11 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 text-sm outline-none transition focus:border-[#4F5BD5] focus:ring-4 focus:ring-[#4F5BD5]/10 dark:border-white/10 dark:bg-[#0D0B24] dark:text-white"
                                    />
                                </div>

                                {/* Email + Location */}

                                <div className="grid gap-5 md:grid-cols-2">

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-[#172046] dark:text-white">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="you@email.com"
                                            className="h-11 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 text-sm outline-none transition focus:border-[#4F5BD5] focus:ring-4 focus:ring-[#4F5BD5]/10 dark:border-white/10 dark:bg-[#0D0B24] dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-[#172046] dark:text-white">
                                            Location / Time Zone
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="City / UTC+"
                                            className="h-11 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 text-sm outline-none transition focus:border-[#4F5BD5] focus:ring-4 focus:ring-[#4F5BD5]/10 dark:border-white/10 dark:bg-[#0D0B24] dark:text-white"
                                        />
                                    </div>

                                </div>

                                {/* Area */}

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#172046] dark:text-white">
                                        Area of Interest
                                    </label>

                                    <select className="h-11 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 text-sm outline-none transition focus:border-[#4F5BD5] focus:ring-4 focus:ring-[#4F5BD5]/10 dark:border-white/10 dark:bg-[#0D0B24] dark:text-white">

                                        <option>Product & Design</option>
                                        <option>Engineering</option>
                                        <option>Security</option>
                                        <option>AI</option>
                                        <option>Customer Success</option>
                                        <option>Sales</option>
                                        <option>Operations</option>

                                    </select>
                                </div>

                                {/* Portfolio */}

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#172046] dark:text-white">
                                        LinkedIn / Portfolio <span className="font-normal">(optional)</span>
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="https://"
                                        className="h-11 w-full rounded-lg border border-[#E5E7EB] bg-white px-4 text-sm outline-none transition focus:border-[#4F5BD5] focus:ring-4 focus:ring-[#4F5BD5]/10 dark:border-white/10 dark:bg-[#0D0B24] dark:text-white"
                                    />
                                </div>

                                {/* Checkbox */}

                                <label className="flex cursor-pointer items-start gap-3">

                                    <input
                                        type="checkbox"
                                        className="mt-1 h-4 w-4 rounded border-gray-300 accent-[#4F5BD5]"
                                    />

                                    <span className="text-[13px] leading-6 text-gray-600 dark:text-gray-400">
                                        I consent to Zoiko Sema keeping my details for future
                                        relevant opportunities where permitted.
                                    </span>

                                </label>

                                {/* Button */}

                                <button
                                    type="submit"
                                    className="tc-btn flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#4F46E5] text-sm font-semibold text-white"
                                >
                                    Join Talent Community

                                    <FiArrowRight className="h-4 w-4" />

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </section>

        </>

    );

}