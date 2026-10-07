import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { site, type GetInTouchData, type SectionProps } from "@/data";

const icons: Record<string, LucideIcon> = { MapPin, Phone, Mail };

const iconStyles: Record<string, string> = {
  blue: "bg-[#1a5fd6]",
  green: "bg-[#2e9b2e]",
};

export default function GetInTouch({ data, className = "" }: SectionProps<GetInTouchData> = {}) {
  const getInTouch = data || site.contact.getInTouch;

  return (
    <section className={`bg-white py-12 lg:py-14 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto bg-[#f2f7fe] rounded-3xl p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-6 lg:gap-8">
        <div className="lg:py-2 lg:pl-2">
          <h2 className="text-3xl font-extrabold text-[#0B2545] mb-3">
            {getInTouch.heading.main}{" "}
            <span className="text-[#2e9b2e]">{getInTouch.heading.highlight}</span>
          </h2>
          <p className="text-sm text-[#4a5868] leading-relaxed mb-6">
            {getInTouch.description}
          </p>

          <div className="space-y-3">
            {getInTouch.list.map((item) => {
              const Icon = icons[item.icon] ?? MapPin;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 bg-white rounded-xl px-4 py-3.5 shadow-[0_4px_16px_rgba(26,95,214,0.06)]"
                >
                  <div
                    className={`w-11 h-11 shrink-0 rounded-full flex items-center justify-center text-white ${iconStyles[item.color] ?? iconStyles.blue}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-sm leading-relaxed font-semibold text-[#0B2545]" aria-label={item.title}>
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[320px] rounded-2xl overflow-hidden shadow-[0_6px_24px_rgba(11,37,69,0.08)]">
          <iframe
            src={getInTouch.mapEmbedUrl}
            title="CloudNex office location"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
