interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  dark?: boolean;
}

export default function SectionHeading({ eyebrow, title, intro, dark = false }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span
        className={`text-[13px] font-semibold uppercase tracking-[0.18em] font-plus-jakarta ${
          dark ? "text-[#38A8F5]" : "text-[#4B5675]"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-3 text-3xl font-extrabold leading-tight tracking-tight font-plus-jakarta md:text-[40px] md:leading-[1.15] ${
          dark ? "text-white" : "text-[#0D1638]"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-[16px] leading-7 md:text-[17px] ${dark ? "text-[#B8C0DA]" : "text-[#5B6582]"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
