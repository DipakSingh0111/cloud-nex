"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  ChevronDown,
  Layers,
  Mail,
  MessageSquareText,
  Phone,
  User,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { site, type QuoteFormData, type SectionProps } from "@/data";

const fieldClass =
  "w-full h-12 pl-10 pr-3 rounded-lg border border-gray-200 bg-white text-sm text-[#0B2545] placeholder:text-gray-400 outline-none focus:border-[#1a6dff] focus:ring-2 focus:ring-[#1a6dff]/15 transition";

function FieldIcon({ icon: Icon, top = false }: { icon: LucideIcon; top?: boolean }) {
  return (
    <Icon
      className={`absolute left-3.5 w-4 h-4 text-gray-400 pointer-events-none ${
        top ? "top-3.5" : "top-1/2 -translate-y-1/2"
      }`}
    />
  );
}

function Input({
  icon,
  ...props
}: { icon: LucideIcon } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <FieldIcon icon={icon} />
      <input {...props} className={fieldClass} />
    </div>
  );
}

function Select({
  icon,
  placeholder,
  options,
  name,
  required,
}: {
  icon: LucideIcon;
  placeholder: string;
  options: string[];
  name: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <FieldIcon icon={icon} />
      <select
        name={name}
        required={required}
        defaultValue=""
        className={`${fieldClass} pr-9 appearance-none cursor-pointer invalid:text-gray-400`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-[#0B2545]">
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 shadow-[0_20px_60px_rgba(11,37,69,0.12)] p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

export default function QuoteForm({ data, className = "" }: SectionProps<QuoteFormData> = {}) {
  const form = data || site.quote.form;
  const serviceOptions = [...site.services.list.map((s) => s.title), form.otherServiceLabel];
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className={className}>
        <div className="text-center py-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#e7f6e7] flex items-center justify-center">
            <BadgeCheck className="w-10 h-10 text-[#2e9b2e]" />
          </div>
          <h3 className="text-2xl font-bold text-[#0B2545] mb-3">{form.successTitle}</h3>
          <p className="text-[#4a5868] leading-relaxed max-w-md mx-auto mb-8">{form.successMessage}</p>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center gap-2 border-2 border-[#1a6dff] text-[#1a6dff] hover:bg-[#1a6dff]/5 font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
          >
            {form.resetLabel}
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card className={className}>
      <h2 className="text-2xl sm:text-[28px] font-bold text-[#0B2545] mb-2">
        {form.heading.main} <span className="text-[#2e9b2e]">{form.heading.highlight}</span>
      </h2>
      <p className="text-sm text-[#4a5868] leading-relaxed mb-6">{form.description}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input icon={User} name="name" type="text" required placeholder={form.fields.name} />
          <Input icon={Mail} name="email" type="email" required placeholder={form.fields.email} />
          <Input icon={Phone} name="phone" type="tel" required placeholder={form.fields.phone} />
          <Input icon={Building2} name="company" type="text" placeholder={form.fields.company} />
          <Select icon={Layers} name="service" required placeholder={form.fields.service} options={serviceOptions} />
          <Select icon={Wallet} name="budget" required placeholder={form.fields.budget} options={form.budgetOptions} />
        </div>

        <Select icon={CalendarClock} name="timeline" placeholder={form.fields.timeline} options={form.timelineOptions} />

        <div className="relative">
          <FieldIcon icon={MessageSquareText} top />
          <textarea
            name="message"
            required
            rows={5}
            placeholder={form.fields.message}
            className={`${fieldClass} h-auto pt-3 resize-none`}
          />
        </div>

        <label className="flex items-start gap-3 text-sm text-[#4a5868] cursor-pointer">
          <input type="checkbox" name="consent" required className="mt-0.5 w-4 h-4 accent-[#2e9b2e] cursor-pointer" />
          {form.consent}
        </label>

        <button
          type="submit"
          className="w-full h-12 rounded-lg bg-gradient-to-r from-[#1a6dff] to-[#3cb043] text-white font-semibold flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(26,109,255,0.3)] hover:opacity-95 hover:-translate-y-0.5 transition-all cursor-pointer group"
        >
          {form.button}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </Card>
  );
}
