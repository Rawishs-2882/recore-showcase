import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, Check, Coins, Leaf, Mail, Recycle, ShieldCheck, Users, X } from "lucide-react";
import serverImage from "@/assets/recore-server.jpg";
import missionImage from "@/assets/recore-mission-server.jpg";
import circuitImage from "@/assets/recore-circuit-detail.jpg";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ReCore | From e-waste to infrastructure" },
      { name: "description", content: "ReCore collects, verifies and rebuilds recovered storage into affordable servers and NAS systems." },
      { property: "og:title", content: "ReCore | From e-waste to infrastructure" },
      { property: "og:description", content: "Less waste. More value. A stronger digital future." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const process = [
  { n: "01", label: "Collect", title: "Source", text: "We recover discarded phones, laptops, drives and decommissioned business hardware from responsible partners." },
  { n: "02", label: "Verify", title: "Sanitize", text: "Every usable component is securely erased, then tested and graded for dependable performance." },
  { n: "03", label: "Rebuild", title: "Deploy", text: "Verified storage is assembled into practical servers and NAS systems for a useful new life." },
];

const benefits = [
  { icon: Leaf, title: "Reduce e-waste", text: "Keep working technology in use and out of landfill." },
  { icon: Coins, title: "Lower costs", text: "Enterprise-grade storage without the enterprise price." },
  { icon: ShieldCheck, title: "Verified & secure", text: "Full testing, grading and secure data wiping." },
  { icon: Users, title: "Greater access", text: "Infrastructure for schools, NGOs, startups and small businesses." },
];

function Index() {
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    if (!formOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setFormOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [formOpen]);

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`ReCore enquiry: ${String(data.get("type") ?? "General enquiry")}`);
    const body = encodeURIComponent([
      `Name: ${String(data.get("name") ?? "")}`,
      `Email: ${String(data.get("email") ?? "")}`,
      `Organization: ${String(data.get("organization") ?? "")}`,
      `Enquiry type: ${String(data.get("type") ?? "")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n"));
    window.location.href = `mailto:info.qararix@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="ReCore home">
            <span className="relative flex size-11 items-center justify-center rounded-full border-[7px] border-primary">
              <span className="absolute -left-2 top-2 h-2 w-3 bg-paper" />
              <span className="absolute -right-2 bottom-2 h-2 w-3 bg-paper" />
            </span>
            <span>
              <span className="block font-sans text-2xl font-bold leading-none">ReCore</span>
              <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.32em] text-muted-foreground">Circular tech. Real impact.</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex" aria-label="Main navigation">
            <a href="#process" className="transition-colors hover:text-primary">How it works</a>
            <a href="#impact" className="transition-colors hover:text-primary">Our impact</a>
            <a href="#mission" className="transition-colors hover:text-primary">Mission</a>
          </nav>
          <button type="button" onClick={() => setFormOpen(true)} className="inline-flex h-11 shrink-0 items-center gap-2 border border-primary bg-primary px-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-forest-soft sm:px-5">
            <span className="sm:hidden">Contact</span><span className="hidden sm:inline">Work with us</span> <ArrowRight className="size-4" />
          </button>
        </div>
      </header>

      <section id="top" className="relative min-h-[760px] lg:min-h-[820px]">
        <img src={serverImage} alt="A rebuilt ReCore storage server with recovered hard drives" width={1600} height={1200} className="absolute inset-0 size-full object-cover object-[68%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--paper)_97%,transparent)_0%,color-mix(in_oklab,var(--paper)_90%,transparent)_62%,color-mix(in_oklab,var(--paper)_34%,transparent)_100%)] lg:bg-[linear-gradient(90deg,var(--paper)_0%,color-mix(in_oklab,var(--paper)_96%,transparent)_37%,color-mix(in_oklab,var(--paper)_42%,transparent)_62%,transparent_78%)]" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-16 pt-32 lg:min-h-[820px] lg:px-10">
          <div className="recore-rise max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-primary"><Recycle className="size-4" /> Circular economy in action</p>
            <h1 className="max-w-xl text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">From e-waste to <span className="italic text-primary">infrastructure.</span></h1>
            <p className="mt-7 max-w-lg text-xl leading-relaxed text-ink-soft sm:text-2xl">Reusing recovered storage to build affordable, dependable servers.</p>
            <p className="mt-6 text-sm font-semibold text-muted-foreground">Less waste. More value. A stronger digital future.</p>
            <a href="#process" className="mt-10 inline-flex items-center gap-3 border-b border-primary pb-2 text-sm font-bold text-primary">See how it works <ArrowDown className="size-4" /></a>
          </div>
        </div>
      </section>

      <section id="process" className="relative bg-paper py-24 sm:py-36">
        <span className="pointer-events-none absolute right-6 top-10 font-display text-[10rem] leading-none text-primary/[0.035] sm:text-[16rem]">02</span>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">The circular route</p>
              <h2 className="mt-6 text-5xl leading-[1.02] sm:text-7xl">Useful technology deserves <span className="italic text-primary">another life.</span></h2>
            </div>
            <p className="border-l border-brass pl-7 text-lg leading-8 text-muted-foreground">Electronic waste is one of the world’s fastest-growing waste streams. ReCore finds the value still inside it, creating dependable infrastructure for organizations that need it most.</p>
          </div>
          <div className="relative mt-20 grid gap-5 md:grid-cols-3">
            <span className="absolute left-[15%] right-[15%] top-16 hidden h-px bg-brass/50 md:block" />
            {process.map((step) => (
              <article key={step.n} className="group relative min-h-96 overflow-hidden border border-border bg-card p-8 shadow-[0_18px_50px_-36px_color-mix(in_oklab,var(--forest)_45%,transparent)] transition-all duration-500 hover:-translate-y-2 hover:border-brass sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-primary">{step.n} — {step.label}</span>
                  <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border bg-paper text-primary transition-colors group-hover:border-brass group-hover:bg-brass group-hover:text-accent-foreground"><ArrowRight className="size-5" /></span>
                </div>
                <span className="absolute -right-3 top-20 font-display text-9xl text-primary/[0.045]">{step.n}</span>
                <h3 className="mt-24 text-4xl">{step.title}</h3>
                <p className="mt-5 max-w-xs leading-7 text-muted-foreground">{step.text}</p>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brass transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="bg-forest py-24 text-primary-foreground sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-lime">Built for real impact</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">Better for budgets. Better for the planet.</h2>
            </div>
            <div className="grid gap-px bg-primary-foreground/20 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, text }) => (
                <article key={title} className="bg-forest p-7 sm:p-9">
                  <Icon className="size-8 text-lime" strokeWidth={1.5} />
                  <h3 className="mt-8 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-primary-foreground/70">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="relative overflow-hidden bg-foreground py-24 text-primary-foreground sm:py-36">
        <img src={circuitImage} alt="Detailed recovered circuit pathways" loading="lazy" width={608} height={1200} className="absolute right-0 top-0 h-full w-1/3 object-cover opacity-20" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--foreground)_50%,color-mix(in_oklab,var(--foreground)_68%,transparent))]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-brass">Our mission</p>
            <h2 className="mt-7 text-6xl leading-[0.9] sm:text-8xl">Growth<br />without<br /><span className="italic text-brass">waste.</span></h2>
            <p className="mt-9 max-w-md text-lg leading-8 text-primary-foreground/65">Make circular technology the practical choice by connecting responsible recovery with real infrastructure needs.</p>
            <ul className="mt-9 space-y-4 text-sm font-semibold">
              {['Secure data handling', 'Rigorous component testing', 'Purpose-built configurations'].map((item) => <li key={item} className="flex items-center gap-3"><span className="flex size-6 items-center justify-center rounded-full bg-brass text-accent-foreground"><Check className="size-3.5" /></span>{item}</li>)}
            </ul>
          </div>
          <div className="relative pb-12 pl-0 sm:pl-10 lg:pb-0">
            <div className="aspect-square overflow-hidden border border-primary-foreground/15">
              <img src={missionImage} alt="ReCore server built for sustainable infrastructure" loading="lazy" width={816} height={816} className="size-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </div>
            <div className="absolute bottom-0 left-0 max-w-[17rem] bg-brass p-7 text-accent-foreground shadow-2xl sm:p-9">
              <p className="font-display text-2xl leading-tight">From overlooked hardware to trusted infrastructure.</p>
              <span className="mt-6 block h-px w-16 bg-accent-foreground/40" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end lg:px-10">
          <div><p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Recover / reuse / rebuild</p><h2 className="mt-4 max-w-2xl text-4xl font-bold">Put retired technology back to work.</h2></div>
          <button type="button" onClick={() => setFormOpen(true)} className="inline-flex h-12 items-center gap-2 bg-primary px-6 text-sm font-bold text-primary-foreground transition-colors hover:bg-forest-soft">Start a conversation <ArrowRight className="size-4" /></button>
        </div>
      </section>

      <footer className="bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p><span className="font-display font-bold text-foreground">ReCore</span> — Circular tech. Real impact.</p>
          <a className="font-semibold text-primary hover:underline" href="mailto:info.qararix@gmail.com">info.qararix@gmail.com</a>
          <p>© 2026 ReCore. Recover. Reuse. Rebuild.</p>
        </div>
      </footer>

      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="enquiry-title" onMouseDown={(event) => event.currentTarget === event.target && setFormOpen(false)}>
          <div className="max-h-[94vh] w-full max-w-3xl overflow-y-auto bg-card shadow-2xl">
            <div className="grid lg:grid-cols-[0.34fr_0.66fr]">
              <aside className="relative overflow-hidden bg-primary p-7 text-primary-foreground sm:p-10">
                <div className="absolute -bottom-20 -right-20 size-56 rounded-full border border-brass/40" />
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-brass">ReCore partnerships</p>
                <h2 id="enquiry-title" className="mt-7 text-5xl leading-none">Work<br />with us.</h2>
                <p className="mt-7 text-sm leading-6 text-primary-foreground/70">Tell us about your circular hardware or infrastructure goals.</p>
                <a href="mailto:info.qararix@gmail.com" className="relative mt-12 flex items-center gap-3 text-sm font-semibold"><Mail className="size-4 text-brass" /> info.qararix@gmail.com</a>
              </aside>
              <div className="relative p-7 sm:p-10">
                <button type="button" onClick={() => setFormOpen(false)} className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary" aria-label="Close enquiry form"><X className="size-5" /></button>
                <form className="mt-8 space-y-7" onSubmit={submitEnquiry}>
                  <div className="grid gap-7 sm:grid-cols-2">
                    <label className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Full name<input required name="name" className="mt-2 w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-colors focus:border-brass" placeholder="Your name" /></label>
                    <label className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Email<input required name="email" type="email" className="mt-2 w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-colors focus:border-brass" placeholder="you@company.com" /></label>
                  </div>
                  <label className="block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Organization<input name="organization" className="mt-2 w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-colors focus:border-brass" placeholder="Organization name" /></label>
                  <label className="block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Enquiry type<select required name="type" className="mt-2 w-full border-0 border-b border-input bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-colors focus:border-brass"><option>Hardware recovery</option><option>Server infrastructure</option><option>Partnership</option><option>General enquiry</option></select></label>
                  <label className="block text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Message<textarea required name="message" rows={3} className="mt-2 w-full resize-none border-0 border-b border-input bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-foreground outline-none transition-colors focus:border-brass" placeholder="Tell us what you need..." /></label>
                  <button type="submit" className="flex h-14 w-full items-center justify-center gap-3 bg-primary text-sm font-bold text-primary-foreground transition-colors hover:bg-forest-soft">Prepare email <ArrowRight className="size-4" /></button>
                  <p className="text-center text-xs text-muted-foreground">This opens your email app with the enquiry ready to send.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
