"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import data from "../../data/cloudNex.json";

export default function BlogSection({ limit }: { limit?: number }) {
  const { section, posts } = data.blog;
  const blogPosts = limit ? posts.slice(0, limit) : posts;

  return (
    <section className="bg-white pt-10 pb-4 lg:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Badge & Title */}
        <div className="text-left max-w-3xl mb-12">
          {/* Badge with horizontal lines */}
          <div className="inline-flex items-center justify-start gap-3 mb-4">
            <span className="bg-blue-50 text-blue-600 text-xs font-bold tracking-wider px-3.5 py-1 rounded-full uppercase">
              {section.badge}
            </span>
            <span className="w-8 h-[2px] bg-blue-500 rounded-full" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B2545] tracking-tight mb-4">
            {section.title} <span className="text-[#2fae38]">{section.highlight}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            {section.description}
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Thumbnail Container */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Floating Date Badge */}
                <div className="absolute bottom-3 left-3 bg-[#0d2238]/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0B2545] leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-6">
                    {post.description}
                  </p>
                </div>

                {/* Card Footer: Author & Read More */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  {/* Author info */}
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-gray-200">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800 leading-tight">
                        By {post.author.name}
                      </p>
                      <p className="text-[11px] text-gray-400 leading-tight">
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors group/link"
                  >
                    <span>{section.readMore}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="flex justify-center">
          <Link
            href={section.viewAll.url}
            className="inline-flex items-center gap-2 bg-[#2fae38] hover:bg-[#289931] text-white text-sm font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 group"
          >
            <span>{section.viewAll.text}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
