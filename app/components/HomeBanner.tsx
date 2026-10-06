import Image from 'next/image';
import Link from 'next/link';
import data from '../../data/cloudNex.json';

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4 lg:w-[clamp(13px,1vw,16px)] lg:h-[clamp(13px,1vw,16px)] fill-none stroke-current stroke-[3px]"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const buttonBase =
  'rounded-full font-semibold flex items-center gap-2 transition-all py-3 px-8 lg:py-[clamp(9px,0.75vw,14px)] lg:px-[clamp(20px,2vw,34px)] lg:text-[clamp(13px,0.95vw,16px)]';

export default function HomeBanner() {
  const { homeBanner } = data;

  return (
    // On lg+ the banner keeps (roughly) the image's aspect ratio and every size below scales with
    // the viewport width, so the layout is identical at 90%–125% browser zoom / display scaling.
    <section className="relative flex items-center w-full overflow-hidden bg-[#eef6fd] min-h-[560px] py-16 lg:min-h-0 lg:py-0 lg:aspect-[2104/800]">
      <Image
        src={homeBanner.image}
        alt="Cloud Solutions Banner"
        fill
        preload
        sizes="100vw"
        className="object-cover object-[70%_center] lg:object-right"
      />

      {/* Keeps text readable on small screens where the image is cropped behind it */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/20 lg:hidden" />

      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-0 lg:pl-[6.5vw]">
        <div className="w-full lg:w-[45vw] font-sans">
          <div className="flex items-center gap-4 mb-4 lg:mb-[clamp(10px,1vw,18px)]">
            <span className="text-[#5b6a7a] text-xs sm:text-[13px] lg:text-[clamp(11px,0.85vw,14px)] font-semibold tracking-[0.2em] uppercase">
              {homeBanner.subtitle}
            </span>
            <div className="w-12 lg:w-[3vw] h-[2px] bg-[#0066ff]/40" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[clamp(32px,3.2vw,64px)] leading-[1.1] font-extrabold text-[#052136] mb-5 lg:mb-[clamp(12px,1.1vw,22px)]">
            {homeBanner.title.line1} <br />
            {homeBanner.title.line2} <br />
            <span className="text-[#0066ff]">{homeBanner.title.highlight}</span>
          </h1>

          <p className="text-[#3f4d5c] text-base sm:text-lg lg:text-[clamp(13px,1.15vw,20px)] mb-8 lg:mb-[clamp(16px,1.8vw,34px)] max-w-lg lg:max-w-[36vw] leading-relaxed font-medium">
            {homeBanner.description}
          </p>

          <div className="flex flex-wrap gap-4 lg:gap-[clamp(10px,1vw,18px)] mb-10 lg:mb-[clamp(18px,2vw,38px)]">
            {homeBanner.buttons.map((btn) => (
              <Link
                key={btn.label}
                href={btn.url}
                className={`${buttonBase} ${
                  btn.primary
                    ? 'bg-[#0066ff] hover:bg-[#0052cc] text-white shadow-[0_4px_14px_rgba(0,102,255,0.4)]'
                    : 'bg-white/60 border-2 border-[#0066ff] text-[#0066ff] hover:bg-[#0066ff]/10'
                }`}
              >
                {btn.label} <ArrowIcon />
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 xl:flex xl:flex-nowrap items-center gap-y-5 lg:gap-y-[clamp(12px,1.2vw,20px)] gap-x-2 xl:gap-x-0 w-full">
            {homeBanner.features.map((f, i) => (
              <div
                key={f.title}
                className={`flex items-center gap-2 sm:gap-3 lg:gap-[clamp(8px,0.7vw,12px)] pr-2 sm:pr-4 xl:pr-[1.1vw] xl:mr-[1.1vw] shrink-0 ${
                  i % 2 === 0 ? 'border-r border-[#c9d9ea] xl:border-r' : ''
                } ${
                  i < homeBanner.features.length - 1 ? 'xl:border-r xl:border-[#c9d9ea]' : 'xl:border-none'
                }`}
              >
                <div className="w-10 h-10 lg:w-[clamp(30px,2.5vw,46px)] lg:h-[clamp(30px,2.5vw,46px)] rounded-full bg-white flex items-center justify-center text-[#0066ff] shrink-0 shadow-[0_4px_12px_rgba(0,102,255,0.2)]">
                  <svg className="w-5 h-5 lg:w-[55%] lg:h-[55%]" viewBox="0 0 24 24" fill="currentColor">
                    <path d={f.icon} />
                  </svg>
                </div>
                <span className="text-sm lg:text-[clamp(11px,0.85vw,15px)] font-semibold text-[#052136] leading-[1.25] whitespace-nowrap">
                  {f.title}
                  <br />
                  {f.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
