"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const phoneDisplay = "07837 205994";
const phoneHref = "tel:07837205994";
const whatsappBaseHref = "https://wa.me/447837205994";
const emailHref = "mailto:kplplastering_rendering@hotmail.com";
const facebookHref = "https://www.facebook.com/KPLPlasteringServices";

const navItems = [
  ["Home", "#home"],
  ["Media Walls", "#media-walls"],
  ["Showcase", "#showcase"],
  ["Reviews", "#reviews"],
  ["Quote", "#quote"],
];

const services = [
  {
    title: "Bespoke Media Walls",
    copy:
      "Designed around your room, TV, fireplace, storage and lighting layout for a high-end focal point.",
    featured: true,
    image: "/images/services/media-wall.png",
  },
  {
    title: "Floating Bulkheads",
    copy:
      "Clean ceiling details, feature lighting zones and modern bulkheads for a premium finish.",
  },
  {
    title: "Venetian Plaster",
    copy:
      "Luxury polished plaster finishes for media walls, feature walls and statement interiors.",
  },
  {
    title: "Wall Panelling",
    copy:
      "Decorative panelling, feature walls and modern detailing to transform plain living spaces.",
  },
  {
    title: "Feature Lighting",
    copy:
      "Integrated LED strips, mood lighting and illuminated shelving designed into the build.",
  },
  {
    title: "Electrical Installation",
    copy:
      "TV points, fire feeds, sockets and lighting handled as part of a complete installation.",
  },
];

const galleryItems = [
  {
    type: "video",
    src: "/videos/gallery/media-wall-1.mp4",
    poster: "/images/gallery/media-wall-1.png",
    title: "Custom Designed Media Walls",
    className: "lg:col-span-7 lg:row-span-2",
  },
  {
    type: "image",
    src: "/images/gallery/media-wall-2.png",
    title: "Inset fireplace feature",
    className: "lg:col-span-5",
  },
  {
    type: "image",
    src: "/images/gallery/media-wall-3.png",
    title: "Venetian plaster finish",
    className: "lg:col-span-5",
  },
  {
    type: "image",
    src: "/images/gallery/media-wall-4.png",
    title: "Integrated shelving",
    className: "lg:col-span-4",
  },
  {
    type: "video",
    src: "/videos/gallery/finished-installation.mp4",
    poster: "/images/gallery/media-wall-5.png",
    title: "The finished installation",
    className: "lg:col-span-4",
  },
  {
    type: "image",
    src: "/images/gallery/media-wall-6.png",
    title: "Evening lighting",
    className: "lg:col-span-4",
  },
];

const reviews = [
  {
    quote:
      "First class service from start to finish. Quick to provide a very competitive quote, helpful with all queries and the finished media wall is top notch.",
    name: "Louise Smith",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Thank you very much for our fireplace, we are in love. Speedy communication and reasonable prices.",
    name: "Natalie Joseph",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Kyle and his team were excellent. Fast to respond, explained everything and were happy to make adjustments to make sure we were happy.",
    name: "Simon Dean",
    date: "Facebook recommendation",
  },
  {
    quote:
      "What a great professional team. Absolutely over the moon with our media wall. Finished in super quick time and left clean and tidy.",
    name: "Ruth Stevenson",
    date: "Facebook recommendation",
  },
  {
    quote:
      "The guys were great. I was really impressed with their professionalism and how quickly things got done. They cleaned up after themselves and were very polite.",
    name: "Rachel Roberts",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Absolutely amazing. We're over the moon with our media wall and the work completed by KPL. Would 100% recommend.",
    name: "Jemma Ebbage",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Kyle and his team are amazing — start to finish professional and fantastic. The media wall is everything and more than we expected.",
    name: "Tim Barber",
    date: "Facebook recommendation",
  },
  {
    quote:
      "They built us a media wall and from start to finish were professional, friendly and attentive to exactly what we wanted.",
    name: "Nisha Paul",
    date: "Facebook recommendation",
  },
  {
    quote:
      "Absolutely thrilled with our media wall. Kyle was quick to respond and very helpful when we asked for advice about lighting.",
    name: "Georgia Hunter",
    date: "Facebook recommendation",
  },
];

const areas = [
  "Rotherham",
  "Sheffield",
  "Doncaster",
  "Barnsley",
  "Worksop",
  "Chesterfield",
  "Wakefield",
  "South Yorkshire",
];

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.5a2 2 0 0 1-.45 2.11L9 10.59a16 16 0 0 0 4.41 4.41l1.26-1.26a2 2 0 0 1 2.11-.45c.8.28 1.64.48 2.5.6A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.53 0 .2 5.33.2 11.9c0 2.1.55 4.16 1.6 5.97L0 24l6.28-1.65a11.86 11.86 0 0 0 5.82 1.48h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.48-8.45ZM12.1 21.82a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.86 9.86 0 0 1-1.51-5.31c0-5.45 4.43-9.89 9.88-9.89 2.64 0 5.12 1.03 6.98 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.43 9.89-9.89 9.89Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.27h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

function Logo({ compact = false, floating = false }: { compact?: boolean; floating?: boolean }) {
  const isNavLogo = compact || floating;

  return (
    <Image
      src={isNavLogo ? "/images/navigation-logo.png" : "/images/logo.png"}
      alt="KPL Plastering Services"
      width={520}
      height={220}
      className={`object-contain ${
        floating
          ? "h-[108px] w-auto max-w-[270px] opacity-90"
          : compact
            ? "h-auto w-[104px]"
            : "h-auto w-[170px] lg:w-[205px]"
      }`}
      priority
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviewStart, setReviewStart] = useState(0);
  const [introVisible, setIntroVisible] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [quoteName, setQuoteName] = useState("");
  const [quotePhone, setQuotePhone] = useState("");
  const [quotePostcode, setQuotePostcode] = useState("");
  const [quoteWall, setQuoteWall] = useState("");
  const [quoteStyle, setQuoteStyle] = useState("");

  const quoteMessage = encodeURIComponent(
    `Hi KPL Plastering Services, I'd like a media wall quote.\n\nName: ${quoteName || "Not provided"}\nPhone: ${quotePhone || "Not provided"}\nPostcode: ${quotePostcode || "Not provided"}\nApprox wall size: ${quoteWall || "Not provided"}\nWhat we'd like: ${quoteStyle || "Not provided"}\n\nI can send an inspiration photo if helpful.`
  );
  const quoteWhatsappHref = `${whatsappBaseHref}?text=${quoteMessage}`;

  useEffect(() => {
    const leaveTimer = setTimeout(() => setIntroLeaving(true), 850);
    const removeTimer = setTimeout(() => setIntroVisible(false), 1450);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setReviewStart((current) => (current + 1) % reviews.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  const visibleReviews = Array.from(
    { length: 3 },
    (_, i) => reviews[(reviewStart + i) % reviews.length]
  );

  const mobileReview = reviews[reviewStart % reviews.length];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080706] text-white">
      <style jsx global>{`
        @keyframes review-slide-in {
          0% {
            opacity: 0;
            transform: translateX(90px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .review-slide-in {
          animation: review-slide-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      {introVisible && (
        <div className={`fixed inset-0 z-[999] flex items-center justify-center bg-black transition-all duration-700 ease-out ${introLeaving ? "pointer-events-none opacity-0 blur-md" : "opacity-100 blur-0"}`}>
          <div className={`transition-all duration-700 ease-out ${introLeaving ? "scale-[1.24] opacity-0 blur-md" : "scale-100 opacity-100 blur-0"}`}>
            <Logo />
          </div>
        </div>
      )}

      <header className="fixed top-0 z-50 w-full md:pointer-events-none">
        <div className={`hidden transition-all duration-500 md:block ${scrolled ? "mt-0 w-full max-w-none px-0" : "mx-auto mt-5 max-w-7xl px-6"}`}>
          {!scrolled ? (
            <div className="pointer-events-auto grid h-[118px] grid-cols-[320px_1fr_220px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/82 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <a href="#home" className="flex items-center justify-center border-r border-white/10 px-5">
                <Logo floating />
              </a>

              <nav className="flex items-center justify-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-white/78">
                {navItems.map(([item, href]) => (
                  <a key={item} href={href} className="transition hover:text-[#f28d1d]">
                    {item}
                  </a>
                ))}
              </nav>

              <a href={quoteWhatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gradient-to-br from-[#ffb347] via-[#f28d1d] to-[#d96705] px-6 text-[0.8rem] font-black uppercase tracking-[0.16em] text-black transition hover:brightness-110">
                Get Quote
              </a>
            </div>
          ) : (
            <div className="pointer-events-auto flex h-[86px] w-full items-center justify-between border-b border-white/10 bg-black px-10 shadow-[0_12px_45px_rgba(0,0,0,0.38)]">
              <a href="#home" className="flex items-center">
                <Logo compact />
              </a>

              <nav className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-white/78">
                {navItems.map(([item, href]) => (
                  <a key={item} href={href} className="transition hover:text-[#f28d1d]">
                    {item}
                  </a>
                ))}
              </nav>

              <a href={phoneHref} className="rounded-full bg-white px-7 py-3 text-xs font-black uppercase tracking-[0.14em] text-black transition hover:bg-[#f28d1d]">
                {phoneDisplay}
              </a>
            </div>
          )}
        </div>

        <div className="border-b border-white/10 bg-black/94 shadow-sm backdrop-blur-xl md:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-3">
            <a href="#home" className="flex items-center justify-start">
              <Logo compact />
            </a>
            <a href={phoneHref} className="mobile-call-wobble rounded-full bg-gradient-to-r from-[#ffb347] to-[#f28d1d] px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-black">
              Call
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white">
              <span className="flex flex-col gap-1.5">
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
                <span className="block h-0.5 w-5 rounded-full bg-white" />
              </span>
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-white/10 bg-black px-5 py-5">
              <div className="flex flex-col gap-4 text-center text-base font-black uppercase tracking-[0.12em] text-white">
                {navItems.map(([item, href]) => (
                  <a key={item} href={href} onClick={() => setMenuOpen(false)}>
                    {item}
                  </a>
                ))}
                <a href={quoteWhatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r from-[#ffb347] to-[#f28d1d] px-5 py-3 text-sm text-black">
                  WhatsApp Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <section id="home" className="relative h-[100svh] overflow-hidden md:h-screen">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-poster.png"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/38 via-black/58 to-black/86 md:bg-gradient-to-r md:from-black/90 md:via-black/42 md:to-transparent" />
        <div className="absolute right-[-120px] top-[18%] z-10 hidden h-[520px] w-[520px] rounded-full bg-[#f28d1d]/25 blur-3xl md:block" />
        <div className="absolute bottom-[-140px] left-[30%] z-10 hidden h-[420px] w-[420px] rounded-full bg-[#ffb347]/15 blur-3xl md:block" />

        <div className="relative z-20 mx-auto flex h-full w-full max-w-7xl px-4 pt-[78px] md:px-6 md:pb-10 md:pt-[180px]">
          <div className="flex h-full w-full items-center">
            <div className="w-full animate-fade-up text-white">
              

              <h1 className="max-w-[12ch] text-[3rem] font-black uppercase leading-[0.86] tracking-[-0.055em] sm:text-[3.4rem] md:max-w-[12ch] md:text-[4.3rem] lg:text-[5.25rem] xl:text-[6.15rem]">
                Bespoke Luxury Media Walls
              </h1>

              <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-white/86 md:text-lg md:leading-8">
                High-end media walls, floating bulkheads, feature lighting and Venetian plaster finishes across Rotherham and South Yorkshire.
              </p>

              <div className="mt-5 grid gap-y-2 gap-x-6 text-sm font-bold leading-5 text-white/88 sm:grid-cols-2 md:max-w-2xl">
                {[
                  "100% recommended on Facebook",
                  "Fully insured",
                  "Fully qualified electricians",
                  "Most installations completed in 1–2 days",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#ffb347] to-[#f28d1d] text-[12px] font-black leading-none text-black shadow-[0_0_20px_rgba(242,141,29,0.45)]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid w-full max-w-[350px] grid-cols-1 gap-3 sm:max-w-[580px] sm:grid-cols-2">
                <a href={quoteWhatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r from-[#ffb347] via-[#f28d1d] to-[#e57308] px-6 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-black shadow-[0_0_35px_rgba(242,141,29,0.35)] transition hover:brightness-110">
                  WhatsApp Quote
                </a>
                <a href={phoneHref} className="rounded-full border border-white/50 bg-white/10 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-white backdrop-blur transition hover:bg-white hover:text-black">
                  Call {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black px-4 py-8 text-white md:px-5">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["100%", "Recommended"],
            ["1–2 Day", "Typical Installations"],
            ["Fully", "Insured"],
            ["Qualified", "Electricians"],
          ].map(([stat, label]) => (
            <div key={label} className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-5 py-5 shadow-[0_0_40px_rgba(242,141,29,0.08)]">
              <p className="bg-gradient-to-r from-[#ffb347] to-[#f28d1d] bg-clip-text text-4xl font-black tracking-[-0.04em] text-transparent">{stat}</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-white/58">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="media-walls" className="bg-[#0b0908] px-4 py-16 text-white md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 md:grid-cols-[0.85fr_1fr] md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#f28d1d]">What We Build</p>
             <h2 className="mt-3 max-w-4xl text-[2.35rem] font-black uppercase leading-[0.9] tracking-[-0.025em] md:text-5xl">
  More than just a tv wall. We transform rooms.
</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/62 md:ml-auto md:text-base">
              KPL Plastering Services create bespoke media walls and feature finishes designed around your room, layout and style.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.08fr_1fr]">
            <div className="group relative min-h-[560px] overflow-hidden rounded-[2rem] border border-[#f28d1d]/22 bg-black shadow-[0_28px_100px_rgba(0,0,0,0.45)]">
              <Image
                src="/images/services/media-wall.png"
                alt="KPL Plastering Services bespoke media wall"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-1000 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/34 to-black/5" />
              <div className="absolute left-6 top-6 rounded-full bg-gradient-to-r from-[#ffb347] to-[#f28d1d] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-black">
                Signature Service
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                <h3 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-5xl">
                  {services[0].title}
                </h3>
                <p className="mt-5 max-w-xl text-base font-semibold leading-7 text-white/72">
                  {services[0].copy}
                </p>
                <a href={quoteWhatsappHref} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-[#f28d1d]">
                  Start A Design Quote
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.slice(1).map((service, index) => (
                <div key={service.title} className={`group rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_0_50px_rgba(242,141,29,0.05)] transition duration-500 hover:-translate-y-1 hover:border-[#f28d1d]/45 hover:bg-white/[0.075] ${index === 4 ? "sm:col-span-2" : ""}`}>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="h-2 w-12 rounded-full bg-gradient-to-r from-[#ffb347] to-[#f28d1d]" />
                    <span className="text-[10px] font-black tracking-[0.25em] text-white/25">0{index + 2}</span>
                  </div>
                  <h3 className="text-xl font-black uppercase leading-tight tracking-[-0.03em]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{service.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="showcase" className="relative overflow-hidden bg-[#f6f0e8] px-4 py-16 text-black md:px-5 md:py-24">
        <div className="absolute right-[-160px] top-20 h-[420px] w-[420px] rounded-full bg-[#f28d1d]/24 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#d96705]">Project Showcase</p>
              <h2 className="mt-3 max-w-4xl text-[2.35rem] font-black uppercase leading-[0.9] tracking-[-0.045em] md:text-5xl">
                Finished media walls made to be shown off.
              </h2>
            </div>
            <p className="max-w-xl text-sm font-medium leading-7 text-black/62 md:ml-auto md:text-base">
A selection of our completed media wall projects, showing the variety of designs and finishes we can create.
            </p>
          </div>

          <div className="grid auto-rows-[260px] gap-4 lg:grid-cols-12 lg:auto-rows-[230px]">
            {galleryItems.map((item, index) => (
              <div key={item.src} className={`group relative overflow-hidden rounded-[1.8rem] bg-black shadow-[0_20px_60px_rgba(0,0,0,0.18)] ${item.className}`}>
                {item.type === "video" ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.035]"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    alt={`KPL Plastering Services project ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition duration-1000 ease-out group-hover:scale-[1.04]"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/8 to-transparent opacity-90" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#ffb347]">0{index + 1}</p>
                    <h3 className="mt-1 text-xl font-black uppercase leading-tight text-white">{item.title}</h3>
                  </div>
                 
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] bg-black p-5 text-white shadow-[0_22px_80px_rgba(0,0,0,0.22)] md:flex md:items-center md:justify-between md:gap-6">
            <p className="max-w-2xl text-sm font-semibold leading-7 text-white/68">
              Every design starts with the room: TV size, fireplace, lighting, storage, wall width and the style you want to create.
            </p>
            <a href={quoteWhatsappHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-gradient-to-r from-[#ffb347] to-[#f28d1d] px-6 py-3.5 text-sm font-black uppercase tracking-[0.12em] text-black md:mt-0">
              Plan My Media Wall
            </a>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-black px-4 py-16 text-white md:px-5 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 md:grid-cols-[0.85fr_1fr] md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.25em] text-[#f28d1d]">Reviews</p>
              <h2 className="mt-3 max-w-4xl text-[2.35rem] font-black uppercase leading-[0.9] tracking-[-0.045em] md:text-5xl">
                100% recommended by customers.
              </h2>
            </div>
            <div className="max-w-xl md:ml-auto">
              <div className="text-2xl font-black tracking-[0.08em] text-[#ffb347]">★★★★★</div>
              <p className="mt-3 text-sm leading-7 text-white/62 md:text-base">
                Real recommendations from your neighbours across South Yorkshire, with a 5-star rating on Facebook and Google.
              </p>
            </div>
          </div>

          <div className="overflow-hidden">
            <div key={`mobile-review-${reviewStart}`} className="review-slide-in md:hidden">
              <div className="flex min-h-[310px] flex-col justify-between rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
                <div>
                  <div className="mb-5 text-lg font-black tracking-[0.1em] text-[#ffb347]">★★★★★</div>
                  <p className="text-base font-semibold leading-7 text-white/78">“{mobileReview.quote}”</p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="font-black text-white">{mobileReview.name}</p>
                  <p className="mt-1 text-sm font-bold text-white/42">{mobileReview.date}</p>
                </div>
              </div>
            </div>

            <div key={`desktop-reviews-${reviewStart}`} className="hidden gap-4 md:grid md:grid-cols-3">
              {visibleReviews.map((review, index) => (
                <div key={`${review.name}-${review.date}`} className="review-slide-in flex min-h-[310px] flex-col justify-between rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-1 hover:border-[#f28d1d]/45" style={{ animationDelay: `${index * 90}ms` }}>
                  <div>
                    <div className="mb-5 text-lg font-black tracking-[0.1em] text-[#ffb347]">★★★★★</div>
                    <p className="text-base font-semibold leading-7 text-white/78">“{review.quote}”</p>
                  </div>
                  <div className="mt-8 border-t border-white/10 pt-5">
                    <p className="font-black text-white">{review.name}</p>
                    <p className="mt-1 text-sm font-bold text-white/42">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b0908] px-4 py-16 text-white md:px-5 md:py-24">
        <div className="absolute left-[-160px] top-16 h-[400px] w-[400px] rounded-full bg-[#f28d1d]/18 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.86fr_1fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-[#f28d1d]">Why Choose KPL</p>
            <h2 className="mt-3 max-w-3xl text-[2.35rem] font-black uppercase leading-[0.9] tracking-[-0.045em] md:text-5xl">
              Designed, built and finished by specialists.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/62 md:text-base">
              From the first message to final clean-up, KPL Plastering Services focus on clear communication, tidy workmanship and a finished feature that transforms the room.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Room-Led Design", "Built to your room, layout and style. Each media wall is a unique, bespoke feature."],
              ["Fast Installations", "Most installations are completed in just 1–2 days once the design is agreed."],
              ["Integrated Electrics", "Qualified electricians handle sockets, lighting and media wall electrical requirements."],
              ["Premium Finishes", "Venetian plaster, panelling, bulkheads, lighting and high-end details available."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
                <div className="mb-5 h-2 w-12 rounded-full bg-gradient-to-r from-[#ffb347] to-[#f28d1d]" />
                <h3 className="text-xl font-black uppercase tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="bg-[#f6f0e8] px-4 py-16 text-black md:px-5 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1fr]">
          <div className="rounded-[2rem] bg-black p-8 text-white shadow-[0_24px_90px_rgba(0,0,0,0.22)] md:p-10">
            <p className="font-black uppercase tracking-[0.25em] text-[#f28d1d]">Areas Covered</p>
            <h2 className="mt-3 text-[2.15rem] font-black uppercase leading-[0.9] tracking-[-0.045em] md:text-5xl">
              Based in Rotherham. Building across South Yorkshire.
            </h2>
            <p className="mt-5 leading-7 text-white/62">
              Bespoke media walls, bulkheads and Venetian plaster finishes for homeowners across the region.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-2">
              {areas.map((area) => (
                <div key={area} className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-3 text-center text-xs font-black uppercase tracking-[0.12em] text-white/80">
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.08)] md:p-8">
            <p className="font-black uppercase tracking-[0.25em] text-[#d96705]">Free Quote</p>
            <h2 className="mt-3 text-[2.15rem] font-black uppercase leading-[0.9] tracking-[-0.045em] md:text-5xl">
              Start your room transformation today.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-black/62">
              Tell KPL Plastering Services the essentials below. Add an inspiration photo afterwards if you have one.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <input className="field" placeholder="Your name" value={quoteName} onChange={(event) => setQuoteName(event.target.value)} />
              <input className="field" placeholder="Phone number" value={quotePhone} onChange={(event) => setQuotePhone(event.target.value)} />
              <input className="field" placeholder="Postcode" value={quotePostcode} onChange={(event) => setQuotePostcode(event.target.value)} />
              <input className="field" placeholder="Approx wall size" value={quoteWall} onChange={(event) => setQuoteWall(event.target.value)} />
              <textarea className="field min-h-[150px] md:col-span-2" placeholder="Tell us what you'd like: TV size, fire, shelves, lighting, panelling, Venetian plaster..." value={quoteStyle} onChange={(event) => setQuoteStyle(event.target.value)} />
              <a href={quoteWhatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-to-r from-[#ffb347] via-[#f28d1d] to-[#e57308] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-black shadow-[0_0_28px_rgba(242,141,29,0.25)] transition hover:brightness-110 md:col-span-2">
                Start Quote On WhatsApp
              </a>
            </div>

            <div className="mt-6 grid gap-3 text-sm font-bold text-black/62 sm:grid-cols-2">
              <a href={phoneHref} className="flex items-center gap-2 hover:text-[#d96705]">
                <PhoneIcon className="h-4 w-4" />
                {phoneDisplay}
              </a>
              <a href={whatsappBaseHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#d96705]">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp KPL
              </a>
            </div>
          </div>
        </div>
      </section>

      <a href={quoteWhatsappHref} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl ring-4 ring-white/25 transition hover:scale-105" aria-label="Message KPL Plastering Services on WhatsApp">
        <WhatsAppIcon className="h-8 w-8" />
      </a>

      <footer className="bg-black px-4 py-12 text-white md:px-5">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <div>
            <Logo />
            <p className="mt-5 max-w-md leading-7 text-white/55">
              KPL Plastering Services specialise in bespoke media walls, floating bulkheads, Venetian plaster and high-end feature finishes from Rotherham.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#f28d1d]">Services</p>
            <div className="space-y-2 text-white/62">
              <p>Bespoke Media Walls</p>
              <p>Floating Bulkheads</p>
              <p>Venetian Plaster</p>
              <p>Wall Panelling</p>
              <p>Feature Lighting</p>
              <p>Electrical Installation</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#f28d1d]">Contact</p>
            <div className="space-y-3 text-white/62">
              <p className="font-bold text-white">KPL Plastering Services</p>
              <p>Rotherham, South Yorkshire</p>
              <a href={phoneHref} className="block hover:text-[#f28d1d]">{phoneDisplay}</a>
              <a href={quoteWhatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#f28d1d]"><WhatsAppIcon className="h-5 w-5 text-[#f28d1d]" />WhatsApp for a quote</a>
              <a href={facebookHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#f28d1d]"><FacebookIcon className="h-5 w-5 text-[#f28d1d]" />Facebook</a>
              <a href={emailHref} className="block break-all hover:text-[#f28d1d]">{emailHref.replace("mailto:", "")}</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/35 md:flex-row">
          <p>© KPL Plastering Services. All rights reserved.</p>
          <p>Media Walls • Bulkheads • Venetian Plaster</p>
        </div>
      </footer>
    </main>
  );
}
