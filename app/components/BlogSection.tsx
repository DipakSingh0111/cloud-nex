"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { site, type BlogNewsData, type SectionProps } from "@/data";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function shortDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return `${String(date.getDate()).padStart(2, "0")} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export default function BlogSection({
  data,
  className = "",
  limit,
}: SectionProps<BlogNewsData> & { limit?: number } = {}) {
  const section = data || site.blog;
  const { posts } = section;
  const blogPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <section className={`bg-white pt-10 pb-10 lg:pb-14 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-[1216px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-4 mb-4">
            <span className="w-10 sm:w-14 h-[2px] bg-[#7fb0ff] rounded-full" />
            <span className="bg-[#e3eefc] text-[#1a5fd6] text-xs sm:text-sm font-semibold tracking-wider uppercase px-5 py-1.5 rounded-full">
              {section.badge}
            </span>
            <span className="w-10 sm:w-14 h-[2px] bg-[#7fb0ff] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B2545] tracking-tight leading-tight mb-4">
            {section.heading.main}{" "}
            <span className="text-[#2e9b2e]">{section.heading.highlight}</span>
          </h2>

          <p className="text-[#4a5868] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {section.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 mb-10">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_6px_24px_rgba(11,37,69,0.08)] hover:shadow-[0_14px_34px_rgba(11,37,69,0.14)] transition-all duration-300 flex flex-col overflow-hidden group"
            >
              <Link href={`/blog/${post.slug}`} className="relative block aspect-[2.85/1] w-full overflow-hidden bg-slate-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                <span className="absolute bottom-3 left-3 bg-white text-[#0B2545] text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                  <Calendar className="w-3.5 h-3.5 text-[#1a6dff]" />
                  {shortDate(post.date)}
                </span>
              </Link>

              <div className="px-5 pt-4 pb-5 flex flex-col flex-grow">
                <h3 className="text-[17px] font-bold text-[#0B2545] leading-snug mb-2 group-hover:text-[#1a6dff] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-[#4a5868] text-[13.5px] leading-relaxed line-clamp-3 mb-4">
                  {post.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden ring-2 ring-white shadow">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[13px] text-[#4a5868] leading-tight truncate">
                        {site.blog.details.authorPrefix}{" "}
                        <span className="font-bold text-[#0B2545]">{post.author.name}</span>
                      </p>
                      <p className="text-xs text-[#5c6a7a] leading-tight mt-1 truncate">
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  <span className="w-px h-9 bg-gray-200 mx-4 shrink-0" />

                  <Link
                    href={`/blog/${post.slug}`}
                    className="shrink-0 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#1a5fd6] hover:text-[#0B2545] transition-colors group/link"
                  >
                    {section.readMore}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href={section.cta.href}
            className="inline-flex items-center gap-2 bg-[#2e9b2e] hover:bg-[#237a23] text-white text-sm font-semibold px-7 py-3 rounded-full shadow-[0_8px_20px_rgba(46,155,46,0.3)] hover:shadow-lg transition-all duration-200 group"
          >
            {section.cta.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
