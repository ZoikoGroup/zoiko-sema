"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

export default function HandshakeLogicSection() {
    const { ref: headerRef, inView: headerIn } = useInView(0.25);
    const { ref: imageRef, inView: imageIn } = useInView(0.15);

    return (
        <>
            <style>{`
        @keyframes hlFadeUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes hlScale{
          from{
            opacity:0;
            transform:scale(.97);
          }
          to{
            opacity:1;
            transform:scale(1);
          }
        }

        .hl-hidden{
          opacity:0;
          transform:translateY(30px);
        }

        .hl-visible{
          animation:hlFadeUp .75s cubic-bezier(.22,1,.36,1) forwards;
        }

        .hl-hidden-img{
          opacity:0;
          transform:scale(.97);
        }

        .hl-visible-img{
          animation:hlScale .8s cubic-bezier(.22,1,.36,1) forwards;
        }

        .hl-image{
          transition:
            transform .45s ease,
            box-shadow .45s ease;
        }

        .hl-image:hover{
          transform:translateY(-6px);
          box-shadow:0 30px 65px rgba(0,0,0,.18);
        }

        @media(prefers-reduced-motion:reduce){

          .hl-hidden,
          .hl-visible,
          .hl-hidden-img,
          .hl-visible-img{
            opacity:1!important;
            transform:none!important;
            animation:none!important;
          }

          .hl-image:hover{
            transform:none;
          }

        }
      `}</style>

            <section className="bg-white py-10 dark:bg-[#0D0B24] sm:py-14">

                <div className="mx-auto max-w-7xl px-6 sm:px-8">

                    {/* Header */}

                    <div
                        ref={headerRef}
                        className={`mx-auto max-w-3xl text-center ${headerIn ? "hl-visible" : "hl-hidden"
                            }`}
                    >
                        <h2 className="text-[clamp(30px,4vw,40px)] font-bold text-[#172046] dark:text-white">
                            Handshake Logic
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 text-gray-500 dark:text-gray-400">
                            Automated validation protocols ensuring your entry is
                            seamless and secure.
                        </p>

                    </div>

                    {/* Handshake Preview */}

                    <div
                        ref={imageRef}
                        className={`mt-8 ${imageIn ? "hl-visible-img" : "hl-hidden-img"
                            }`}
                        style={{ animationDelay: ".12s" }}
                    >
                        <div className="overflow-hidden rounded-[28px] border border-[#E6E8F5] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[#151233]">

                            <Image
                                src="/join-a-meeting/handshake-logic.png"
                                alt="Handshake validation workflow"
                                width={1600}
                                height={1000}
                                priority
                                className="hl-image h-auto w-full object-cover"
                            />

                        </div>
                    </div>

                </div>

            </section>

        </>

    );

}