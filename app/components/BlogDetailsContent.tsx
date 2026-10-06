import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ChartColumnIncreasing,
  ChevronRight,
  Clock,
  Cloud,
  Cpu,
  Globe,
  Lock,
  MessageCircle,
  Server,
  Settings,
  ShieldCheck,
  User,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { site, type BlogPost, type SectionProps } from "@/data";

export type { BlogPost } from "@/data";

const icons: Record<string, LucideIcon> = {
  ChartColumnIncreasing,
  Settings,
  ShieldCheck,
  Cloud,
  Globe,
  Zap,
  Lock,
  Server,
  Cpu,
  Users,
};

const iconStyles: Record<string, string> = {
  green: "bg-[#e7f6e7] text-[#2e9b2e]",
  blue: "bg-[#e8f1ff] text-[#1a6dff]",
};

function splitTitle(title: string, highlight: string) {
  return highlight && title.endsWith(highlight)
    ? [title.slice(0, -highlight.length).trimEnd(), highlight]
    : [title, ""];
}

export default function BlogDetailsContent({ data, className = "" }: SectionProps<BlogPost> = {}) {
  const { details, posts } = site.blog;
  const post = data || posts[0];
  const [titleStart, titleHighlight] = splitTitle(post.title, post.highlight);

  const recentPosts = [
    ...details.recentPostSlugs
      .map((slug) => posts.find((p) => p.slug === slug))
      .filter((p): p is BlogPost => !!p),
    ...posts,
  ]
    .filter((p, i, arr) => p.slug !== post.slug && arr.indexOf(p) === i)
    .slice(0, 3);

  return (
    <section className={`bg-white pt-8 lg:pt-10 pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <nav className="flex flex-wrap items-center gap-2 text-[13px] text-[#5c6a7a] mb-6">
          {details.miniBreadcrumbs.map((crumb) => (
            <span key={crumb.label} className="flex items-center gap-2">
              <Link href={crumb.href} className="hover:text-[#1a6dff] transition-colors">
                {crumb.label}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </span>
          ))}
          <span className="text-[#0B2545] font-medium">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-10 lg:gap-12">
          <article>
            <span className="inline-block border border-[#3cb043]/50 text-[#2e9b2e] bg-[#f2fbf2] uppercase text-[11px] font-bold tracking-widest px-3.5 py-1 rounded-full mb-4">
              {post.tag}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B2545] tracking-tight leading-[1.15] mb-5">
              {titleStart}
              {titleHighlight && (
                <>
                  {" "}
                  <span className="text-[#2e9b2e]">{titleHighlight}</span>
                </>
              )}
            </h1>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm font-medium text-[#33414f] mb-7">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#1a6dff]" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#1a6dff]" />
                {details.authorPrefix} {post.author.name}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#1a6dff]" />
                {post.readTime} {details.readTimeLabel}
              </span>
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#1a6dff]" />
                {post.comments} {details.commentsLabel}
              </span>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8 shadow-[0_12px_34px_rgba(11,37,69,0.15)]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                preload
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="text-[#4a5868] text-[15px] sm:text-base leading-relaxed space-y-7">
              <p>{post.content.intro}</p>

              {post.content.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] mb-3">
                    {section.heading}
                  </h2>
                  <p>{section.body}</p>
                </div>
              ))}

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] mb-6">
                  {post.content.benefitsTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {post.content.benefits.map((benefit) => {
                    const Icon = icons[benefit.icon] ?? Cloud;
                    return (
                      <div key={benefit.title} className="flex gap-4">
                        <div
                          className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center ${iconStyles[benefit.color] ?? iconStyles.blue}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-[#1a5fd6] mb-0.5">
                            {benefit.title}
                          </h3>
                          <p className="text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] mb-3">
                  {post.content.conclusion.heading}
                </h2>
                <p>{post.content.conclusion.body}</p>
              </div>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-36 self-start">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_6px_24px_rgba(26,95,214,0.07)]">
              <h3 className="text-lg font-bold text-[#0B2545] mb-4">{details.categoriesTitle}</h3>
              <ul className="divide-y divide-gray-100">
                {details.categories.map((cat) => {
                  const active = cat.name === post.category;
                  return (
                    <li key={cat.name}>
                      <Link
                        href="/blog"
                        className={`flex items-center justify-between px-3 py-3 my-0.5 rounded-lg text-sm transition-colors ${
                          active
                            ? "bg-[#eaf2fe] text-[#1a5fd6] font-semibold"
                            : "text-[#33414f] hover:bg-gray-50 hover:text-[#1a5fd6]"
                        }`}
                      >
                        <span>
                          {cat.name} ({String(cat.count).padStart(2, "0")})
                        </span>
                        <ChevronRight className="w-4 h-4 opacity-70" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_6px_24px_rgba(26,95,214,0.07)]">
              <h3 className="text-lg font-bold text-[#0B2545] mb-5">{details.recentPostsTitle}</h3>
              <div className="space-y-4">
                {recentPosts.map((recent) => (
                  <Link key={recent.slug} href={`/blog/${recent.slug}`} className="flex gap-3 group">
                    <div className="relative w-24 h-16 shrink-0 rounded-lg overflow-hidden bg-[#061a33]">
                      <Image
                        src={recent.image}
                        alt={recent.title}
                        fill
                        sizes="96px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center min-w-0">
                      <h4 className="text-sm font-bold text-[#1a5fd6] leading-snug line-clamp-2 mb-1 group-hover:text-[#0B2545] transition-colors">
                        {recent.title}
                      </h4>
                      <span className="flex items-center gap-1.5 text-xs text-[#5c6a7a]">
                        <Calendar className="w-3.5 h-3.5 text-[#1a6dff]" />
                        {recent.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#061a33] via-[#0a2a5c] to-[#0b3a7a] p-6 text-white shadow-[0_14px_34px_rgba(6,26,51,0.35)]">
              <div className="absolute -top-6 -right-8 w-44 h-44 rounded-full bg-[#1a6dff]/40 blur-3xl pointer-events-none" />
              <Cloud
                className="absolute top-4 right-3 w-28 h-28 text-[#5aa2ff] fill-[#1a6dff]/60 drop-shadow-[0_0_18px_rgba(90,162,255,0.8)] pointer-events-none"
                strokeWidth={1.25}
              />

              <div className="relative max-w-[62%]">
                <p className="text-xs font-semibold text-[#9cc3ff] mb-2">{details.ctaCard.eyebrow}</p>
                <h3 className="text-2xl font-extrabold leading-tight mb-3">
                  {details.ctaCard.heading.main}{" "}
                  <span className="text-[#4cc94c]">{details.ctaCard.heading.highlight}</span>
                </h3>
              </div>
              <p className="relative text-xs text-blue-100/80 leading-relaxed mb-5 max-w-[85%]">
                {details.ctaCard.description}
              </p>
              <Link
                href={details.ctaCard.button.href}
                className="relative inline-flex items-center gap-2 bg-[#2e9b2e] hover:bg-[#237a23] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors group"
              >
                {details.ctaCard.button.label}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
