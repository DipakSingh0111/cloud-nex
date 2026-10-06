import { CircleCheck, FileCheck, Mail, PhoneCall, SearchCheck, Send, type LucideIcon } from "lucide-react";
import data from "../../../data/cloudNex.json";
import QuoteForm from "./QuoteForm";

const stepIcons: Record<string, LucideIcon> = { Send, SearchCheck, FileCheck };

export default function QuoteSection() {
  const { intro, nextSteps, contactCard } = data.quotePage;

  return (
    <section className="relative overflow-clip bg-gradient-to-br from-white via-[#f7fbff] to-[#eaf3fe] py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#dbe9fd]/60 pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 rounded-full bg-[#e7f6e7]/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-10 lg:gap-14 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0B2545]">{intro.badge}</span>
            <span className="w-8 h-[2px] bg-[#2e9b2e] rounded-full" />
          </div>

          <h1 className="text-4xl sm:text-[44px] font-extrabold text-[#0B2545] leading-[1.12] tracking-tight mb-5">
            {intro.title} <span className="text-[#2e9b2e]">{intro.highlight}</span>
          </h1>

          <p className="text-[#4a5868] text-base leading-relaxed mb-7">{intro.description}</p>

          <ul className="space-y-3 mb-10">
            {intro.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-[15px] font-medium text-[#0B2545]">
                <CircleCheck className="w-5 h-5 shrink-0 text-white fill-[#2e9b2e]" />
                {benefit}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-[#0B2545] mb-5">{nextSteps.title}</h2>
          <ol className="relative space-y-5 mb-10">
            <span className="absolute left-6 top-6 bottom-6 border-l-2 border-dashed border-[#bcd4f7]" aria-hidden />
            {nextSteps.steps.map((step, i) => {
              const Icon = stepIcons[step.icon] ?? Send;
              const green = i % 2 === 1;
              return (
                <li key={step.title} className="relative flex items-center gap-4">
                  <div
                    className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center text-white shadow-md ${
                      green ? "bg-[#2e9b2e]" : "bg-[#1a6dff]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#0B2545]">
                      <span className="text-[#1a5fd6] mr-1.5">{String(i + 1).padStart(2, "0")}.</span>
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#4a5868]">{step.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#061a33] via-[#0a2a5c] to-[#0b3a7a] p-6 text-white shadow-[0_14px_34px_rgba(6,26,51,0.3)]">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#1a6dff]/40 blur-3xl pointer-events-none" />
            <h3 className="relative text-xl font-bold mb-1">{contactCard.title}</h3>
            <p className="relative text-sm text-blue-100/80 mb-5">{contactCard.description}</p>
            <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-6">
              <a
                href={`tel:${contactCard.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm font-semibold hover:text-[#7fe07f] transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-[#2e9b2e] flex items-center justify-center">
                  <PhoneCall className="w-4 h-4" />
                </span>
                {contactCard.phone}
              </a>
              <a
                href={`mailto:${contactCard.email}`}
                className="flex items-center gap-3 text-sm font-semibold hover:text-[#9cc3ff] transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-[#1a6dff] flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </span>
                {contactCard.email}
              </a>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-36">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
