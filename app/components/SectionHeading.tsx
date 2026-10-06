interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight: string;
  titleEnd?: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  titleEnd,
  description,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "text-center max-w-3xl mx-auto mb-12" : "mb-6"}>
      <div className={`inline-flex items-center gap-4 mb-3 ${centered ? "justify-center" : ""}`}>
        {centered && <span className="w-12 h-[2px] bg-[#1a5fd6] rounded-full" />}
        <span className="text-[#0B2545] text-sm font-semibold tracking-[0.2em] uppercase">
          {badge}
        </span>
        <span className="w-12 h-[2px] bg-[#1a5fd6] rounded-full" />
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B2545] tracking-tight leading-tight mb-4">
        {title} <span className="text-[#2e9b2e]">{highlight}</span>
        {titleEnd && <> {titleEnd}</>}
      </h2>

      {description && (
        <p className={`text-[#4a5868] text-sm sm:text-[17px] leading-relaxed max-w-xl ${centered ? "mx-auto" : ""}`}>{description}</p>
      )}
    </div>
  );
}
