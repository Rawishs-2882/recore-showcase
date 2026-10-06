import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, Coins, Database, Leaf, Recycle, ShieldCheck, Users } from "lucide-react";
import serverImage from "@/assets/recore-server.jpg";

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
  { n: "01", title: "Collect", text: "We recover discarded phones, laptops, drives and decommissioned business hardware." },
  { n: "02", title: "Recover & verify", text: "Every usable component is securely erased, tested and graded for reliability." },
  { n: "03", title: "Rebuild", text: "Verified storage is assembled into practical servers and NAS systems." },
];

const benefits = [
  { icon: Leaf, title: "Reduce e-waste", text: "Keep working technology in use and out of landfill." },
  { icon: Coins, title: "Lower costs", text: "Enterprise-grade storage without the enterprise price." },
  { icon: ShieldCheck, title: "Verified & secure", text: "Full testing, grading and secure data wiping." },
  { icon: Users, title: "Greater access", text: "Infrastructure for schools, NGOs, startups and small businesses." },
];

function Index() {
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
              <span className="block font-display text-2xl font-bold leading-none">ReCore</span>
              <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.32em] text-muted-foreground">Circular tech. Real impact.</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex" aria-label="Main navigation">
            <a href="#process" className="transition-colors hover:text-primary">How it works</a>
            <a href="#impact" className="transition-colors hover:text-primary">Our impact</a>
            <a href="#mission" className="transition-colors hover:text-primary">Mission</a>
          </nav>
          <a href="mailto:hello@recore.tech" className="inline-flex h-11 shrink-0 items-center gap-2 border border-primary bg-primary px-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-forest-soft sm:px-5">
            <span className="sm:hidden">Contact</span><span className="hidden sm:inline">Work with us</span> <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      <section id="top" className="relative min-h-[760px] lg:min-h-[820px]">
        <img src={serverImage} alt="A rebuilt ReCore storage server with recovered hard drives" width={1600} height={1200} className="absolute inset-0 size-full object-cover object-[68%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--paper)_97%,transparent)_0%,color-mix(in_oklab,var(--paper)_90%,transparent)_62%,color-mix(in_oklab,var(--paper)_34%,transparent)_100%)] lg:bg-[linear-gradient(90deg,var(--paper)_0%,color-mix(in_oklab,var(--paper)_96%,transparent)_37%,color-mix(in_oklab,var(--paper)_42%,transparent)_62%,transparent_78%)]" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-16 pt-32 lg:min-h-[820px] lg:px-10">
          <div className="recore-rise max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-primary"><Recycle className="size-4" /> Circular economy in action</p>
            <h1 className="max-w-xl text-5xl font-bold leading-[0.94] sm:text-6xl lg:text-7xl">From e-waste to <span className="text-primary">infrastructure.</span></h1>
            <p className="mt-7 max-w-lg text-xl leading-relaxed text-ink-soft sm:text-2xl">Reusing recovered storage to build affordable, dependable servers.</p>
            <p className="mt-6 text-sm font-semibold text-muted-foreground">Less waste. More value. A stronger digital future.</p>
            <a href="#process" className="mt-10 inline-flex items-center gap-3 border-b border-primary pb-2 text-sm font-bold text-primary">See how it works <ArrowDown className="size-4" /></a>
          </div>
        </div>
      </section>

      <section id="process" className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">The circular route</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">Useful technology deserves another life.</h2>
            </div>
            <p className="max-w-2xl self-end text-lg leading-8 text-muted-foreground">Electronic waste is one of the world’s fastest-growing waste streams. ReCore finds the value still inside it, creating dependable infrastructure for organizations that need it most.</p>
          </div>
          <div className="mt-16 grid border-y border-border md:grid-cols-3">
            {process.map((step, index) => (
              <article key={step.n} className="relative border-b border-border py-10 md:border-b-0 md:border-r md:px-9 md:first:pl-0 md:last:border-r-0">
                <span className="font-display text-sm font-bold text-primary">{step.n}</span>
                <h3 className="mt-10 text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{step.text}</p>
                {index < 2 && <ArrowRight className="absolute right-5 top-11 hidden size-5 text-primary md:block" />}
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

      <section id="mission" className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-secondary">
            <div className="relative flex size-56 items-center justify-center rounded-full border border-primary/30 sm:size-72">
              <div className="flex size-36 items-center justify-center rounded-full border border-primary/50 sm:size-44"><Database className="size-16 text-primary" strokeWidth={1} /></div>
              <span className="absolute left-0 top-1/2 h-px w-full bg-primary/30" />
              <span className="absolute left-1/2 top-0 h-full w-px bg-primary/30" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Our mission</p>
            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">Make circular technology the practical choice.</h2>
            <p className="mt-7 text-lg leading-8 text-muted-foreground">ReCore connects responsible recovery with real infrastructure needs. We turn overlooked components into secure, affordable systems—extending product life while widening access to reliable storage.</p>
            <ul className="mt-8 space-y-4 text-sm font-semibold">
              {['Secure data handling', 'Rigorous component testing', 'Purpose-built configurations'].map((item) => <li key={item} className="flex items-center gap-3"><span className="flex size-6 items-center justify-center rounded-full bg-secondary text-primary"><Check className="size-3.5" /></span>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-end lg:px-10">
          <div><p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Recover / reuse / rebuild</p><h2 className="mt-4 max-w-2xl text-4xl font-bold">Put retired technology back to work.</h2></div>
          <a href="mailto:hello@recore.tech" className="inline-flex h-12 items-center gap-2 bg-primary px-6 text-sm font-bold text-primary-foreground transition-colors hover:bg-forest-soft">Start a conversation <ArrowRight className="size-4" /></a>
        </div>
      </section>

      <footer className="bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p><span className="font-display font-bold text-foreground">ReCore</span> — Circular tech. Real impact.</p>
          <p>© 2026 ReCore. Recover. Reuse. Rebuild.</p>
        </div>
      </footer>
    </main>
  );
}
