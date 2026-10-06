"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CircleCheck,
  FileText,
  Mail,
  MessageSquareText,
  Phone,
  User,
  type LucideIcon,
} from "lucide-react";
import { site, type ContactFormData, type SectionProps } from "@/data";

const inputClass =
  "w-full h-12 pl-10 pr-3 rounded-lg border border-gray-200 bg-white text-sm text-[#0B2545] placeholder:text-gray-400 outline-none focus:border-[#1a6dff] focus:ring-2 focus:ring-[#1a6dff]/15 transition";

function Field({
  icon: Icon,
  ...props
}: { icon: LucideIcon } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      <input {...props} required className={inputClass} />
    </div>
  );
}

export default function ContactForm({ data, className = "" }: SectionProps<ContactFormData> = {}) {
  const form = data || site.contact.form;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <div className={`bg-white rounded-2xl shadow-[0_20px_60px_rgba(11,37,69,0.12)] border border-gray-100 p-6 sm:p-7 ${className}`}>
      <h2 className="text-2xl font-bold text-[#0B2545] mb-2">{form.title}</h2>
      <p className="text-sm text-[#4a5868] leading-relaxed mb-6">{form.description}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field icon={User} name="name" type="text" placeholder={form.fields.name} />
          <Field icon={Mail} name="email" type="email" placeholder={form.fields.email} />
          <Field icon={Phone} name="phone" type="tel" placeholder={form.fields.phone} />
          <Field icon={FileText} name="subject" type="text" placeholder={form.fields.subject} />
        </div>

        <div className="relative">
          <MessageSquareText className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
          <textarea
            name="message"
            required
            rows={4}
            placeholder={form.fields.message}
            className={`${inputClass} h-auto pt-3 resize-none`}
          />
        </div>

        <button
          type="submit"
          className="w-full h-12 rounded-lg bg-gradient-to-r from-[#1a6dff] to-[#3cb043] text-white font-semibold flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(26,109,255,0.3)] hover:opacity-95 hover:-translate-y-0.5 transition-all cursor-pointer group"
        >
          {form.button}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        {submitted && (
          <p className="flex items-start gap-2 text-sm text-[#2e9b2e] bg-[#e7f6e7] rounded-lg px-3 py-2.5">
            <CircleCheck className="w-4 h-4 mt-0.5 shrink-0" />
            {form.successMessage}
          </p>
        )}
      </form>
    </div>
  );
}
