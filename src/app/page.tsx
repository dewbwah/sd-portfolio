import {
  ArrowRight,
  ChevronRight,
  CircleDot,
  Mail,
  Newspaper,
  RadioTower,
} from "lucide-react";
import { MotionShell } from "@/components/motion-shell";
import {
  articles,
  beliefs,
  builds,
  commandCards,
  contactCards,
  contactLinks,
  currentTools,
  navItems,
  obsessions,
  proof,
  stackGroups,
  traits,
} from "@/lib/portfolio-data";

const sectionLabelClass =
  "inline-flex w-fit items-center gap-2 rounded-full border border-aqua/20 bg-aqua/[0.07] px-3 py-1.5 text-sm font-semibold text-aqua shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]";

const panelClass =
  "rounded-[2rem] border border-white/10 bg-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.11),0_24px_80px_-44px_rgba(83,216,251,0.48)] backdrop-blur-xl";

function SectionHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-5 sm:px-6 lg:px-8">
      <p className={sectionLabelClass}>
        <span className="size-1.5 rounded-full bg-aqua" aria-hidden="true" />
        {label}
      </p>
      <div className="mt-4 grid gap-5 lg:grid-cols-[0.95fr_1fr] lg:items-end">
        <h2 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {children ? (
          <div className="max-w-2xl text-base leading-7 text-[#DCE1E9]/78 sm:text-lg">
            {children}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function GlassLink({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 active:translate-y-px ${
        primary
          ? "bg-aqua text-[#1f2525] shadow-[0_18px_52px_-24px_rgba(83,216,251,0.78)] hover:bg-[#66C3FF]"
          : "border border-white/12 bg-white/[0.07] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-aqua/45 hover:bg-white/[0.11]"
      }`}
    >
      <span>{children}</span>
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <nav className="sticky top-0 z-30 border-b border-white/10 bg-[#363732]/78 backdrop-blur-2xl">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
          <a href="#top" className="text-sm font-semibold tracking-tight text-white sm:text-base">
            Shelby DuBois
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-xs font-medium text-[#DCE1E9]/76 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#writing"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-aqua/35 bg-aqua/10 px-4 text-xs font-semibold text-white transition hover:bg-aqua/18 active:translate-y-px"
            aria-label="Read Shelby DuBois latest writing"
          >
            <Newspaper className="size-4" aria-hidden="true" />
            Read the latest
          </a>
        </div>
      </nav>

      <section id="top" className="relative mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl gap-10 px-5 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-12">
        <MotionShell>
          <div className="flex max-w-2xl flex-wrap gap-2">
            {["Founder", "Operator", "AI workflow builder", "Homeschool mom", "KC-based"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm font-semibold text-[#DCE1E9]/82"
              >
                {item}
              </span>
            ))}
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.96] tracking-tight text-white sm:text-5xl lg:text-[3.7rem] xl:text-[4.25rem]">
            I build systems, write sharp things, and use AI to make my brain less of a crime scene.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#DCE1E9]/78 sm:text-xl">
            I got tired of trying to write across a million platforms, so I built my own corner of the internet. This is where I can brain dump what I&apos;m building, what I&apos;m learning, what I&apos;m mad about, and the things I can&apos;t stop caring about.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <GlassLink href="#builds" primary>
              See what I&apos;m building
            </GlassLink>
            <GlassLink href="#writing">Read my thinking</GlassLink>
            <GlassLink href="#contact">Visit DewBwah</GlassLink>
          </div>
        </MotionShell>

        <MotionShell delay={0.12} className="lg:pl-6">
          <div className={`${panelClass} relative p-4 sm:p-5`}>
            <div className="absolute -inset-px rounded-[2rem] bg-[linear-gradient(135deg,rgba(83,216,251,0.38),transparent_32%,rgba(102,195,255,0.18))] opacity-70" aria-hidden="true" />
            <div className="relative rounded-[1.55rem] border border-white/10 bg-[#2d2f2c]/88 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-semibold text-aqua">Command center</p>
                  <h2 className="mt-1 text-xl font-semibold text-white">Shelby OS</h2>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-aqua/25 bg-aqua/10 px-3 py-1.5 text-xs font-semibold text-aqua">
                  <span className="size-2 rounded-full bg-aqua" />
                  Live
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {commandCards.map((card, index) => (
                  <div
                    key={card}
                    className="group rounded-3xl border border-white/10 bg-white/[0.06] p-4 transition duration-300 hover:-translate-y-1 hover:border-aqua/35 hover:bg-white/[0.095]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <CircleDot className="size-4 text-aqua" aria-hidden="true" />
                      <span className="text-xs font-semibold text-[#DCE1E9]/42">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-7 text-sm font-semibold leading-5 text-white">{card}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-3xl border border-aqua/20 bg-aqua/[0.08] p-4">
                <p className="text-sm font-semibold text-aqua">Currently using</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {currentTools.map((tool) => (
                    <span key={tool} className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-[#DCE1E9]">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionShell>
      </section>

      <section id="about" className="py-16 sm:py-24">
        <SectionHeading label="01 - About" title="I&apos;m Shelby. I collect hard problems and then build systems around them.">
          <p>
            I run DewBwah, a marketing agency for contractors, remodelers, builders, home service businesses, and local companies.
          </p>
          <p className="mt-4">
            But this site is bigger than the agency. I&apos;m a founder, operator, writer, homeschool mom, AI workflow builder, and professional translator of “why isn&apos;t this working?” into actual next steps.
          </p>
          <p className="mt-4">
            I care about useful work: fast websites, clear writing, local visibility, practical AI, better systems, stronger thinking, and tools that make life less feral instead of adding another login to babysit.
          </p>
        </SectionHeading>
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {traits.map((trait, index) => {
            const Icon = trait.icon;
            return (
              <MotionShell key={trait.title} delay={index * 0.035} className={`${panelClass} p-5 transition duration-300 hover:-translate-y-1 hover:border-aqua/35`}>
                <Icon className="size-5 text-aqua" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-semibold text-white">{trait.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#DCE1E9]/74">{trait.body}</p>
              </MotionShell>
            );
          })}
        </div>
      </section>

      <section id="builds" className="py-16 sm:py-24">
        <SectionHeading label="02 - Current Builds" title="What I&apos;m building" />
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          {builds.map((build, index) => {
            const Icon = build.icon;
            return (
              <MotionShell key={build.title} delay={index * 0.035} className={`${panelClass} group min-h-64 p-6 transition duration-300 hover:-translate-y-1 hover:border-aqua/35`}>
                <div className="flex items-start justify-between gap-4">
                  <Icon className="size-6 text-aqua" aria-hidden="true" />
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-[#DCE1E9]/58">
                    Build 0{index + 1}
                  </span>
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-tight text-white">{build.title}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#DCE1E9]/76">{build.body}</p>
              </MotionShell>
            );
          })}
        </div>
      </section>

      <section id="beliefs" className="py-16 sm:py-24">
        <SectionHeading label="03 - Beliefs" title="A few hills I&apos;ll probably die on" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className={`${panelClass} grid gap-px overflow-hidden bg-white/10 md:grid-cols-2`}>
            {beliefs.map((belief, index) => (
              <MotionShell key={belief} delay={index * 0.02} className="bg-[#363732]/86 p-5 sm:p-6">
                <p className="inline-flex size-8 items-center justify-center rounded-full border border-aqua/20 bg-aqua/10 text-sm font-semibold text-aqua">
                  {index + 1}
                </p>
                <p className="mt-6 text-lg font-semibold leading-7 text-white">{belief}</p>
              </MotionShell>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <SectionHeading label="04 - Proof of Work" title="Receipts, experiments, and useful messes" />
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          {proof.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionShell key={item.title} delay={index * 0.035} className={`${panelClass} p-6 transition duration-300 hover:-translate-y-1 hover:border-aqua/35 ${index === 0 || index === 5 ? "lg:row-span-2" : ""}`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-aqua/20 bg-aqua/[0.08] px-3 py-1.5 text-xs font-semibold text-aqua">{item.category}</span>
                  <Icon className="size-5 text-aqua" aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#DCE1E9]/75">{item.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-[#DCE1E9]/78">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-aqua transition hover:text-white" aria-label={`${item.cta} for ${item.title}`}>
                  {item.cta}
                  <ChevronRight className="size-4" aria-hidden="true" />
                </a>
              </MotionShell>
            );
          })}
        </div>
      </section>

      <section id="stack" className="py-16 sm:py-24">
        <SectionHeading label="05 - Stack" title="What I use when I&apos;m not rage-quitting a broken tool" />
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {stackGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <MotionShell key={group.title} delay={index * 0.035} className={`${panelClass} p-5`}>
                <div className="flex items-center gap-3">
                  <Icon className="size-5 text-aqua" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-[#DCE1E9]/[0.08] px-3 py-1.5 text-xs font-medium text-[#DCE1E9]/82">
                      {item}
                    </span>
                  ))}
                </div>
              </MotionShell>
            );
          })}
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <SectionHeading label="06 - Current Obsessions" title="What I&apos;m probably researching at 11:47 PM" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {obsessions.map((obsession, index) => (
              <MotionShell key={obsession} delay={index * 0.02} className="rounded-3xl border border-white/10 bg-white/[0.055] p-4 transition duration-300 hover:-translate-y-1 hover:border-aqua/35 hover:bg-white/[0.09]">
                <RadioTower className="size-4 text-aqua" aria-hidden="true" />
                <p className="mt-5 text-sm font-semibold leading-6 text-white">{obsession}</p>
              </MotionShell>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="py-16 sm:py-24">
        <SectionHeading label="07 - Writing" title="Notes from the deep end">
          <p>
            I write about AI, marketing, websites, local business, homeschooling, systems, and the weird middle space where all of those start yelling at each other.
          </p>
        </SectionHeading>
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
          {articles.map((article, index) => (
            <MotionShell key={article.title} delay={index * 0.035} className={`${panelClass} group p-5 transition duration-300 hover:-translate-y-1 hover:border-aqua/35`}>
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-aqua/24 bg-aqua/10 px-3 py-1.5 text-xs font-semibold text-aqua">
                  {article.category}
                </span>
                <span className="text-xs font-semibold text-[#DCE1E9]/55">{article.readTime}</span>
              </div>
              <h3 className="mt-9 text-xl font-semibold leading-7 tracking-tight text-white">{article.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#DCE1E9]/75">{article.excerpt}</p>
              <a href="#" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-aqua transition hover:text-white" aria-label={`Read ${article.title}`}>
                Read draft
                <ChevronRight className="size-4" aria-hidden="true" />
              </a>
            </MotionShell>
          ))}
        </div>
      </section>

      <section id="contact" className="px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className={`${panelClass} mx-auto max-w-7xl overflow-hidden p-6 sm:p-8 lg:p-10`}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className={sectionLabelClass}>
                <span className="size-1.5 rounded-full bg-aqua" aria-hidden="true" />
                08 - Contact
              </p>
              <h2 className="mt-4 text-5xl font-semibold leading-none tracking-tight text-white sm:text-6xl">
                Send the thing.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#DCE1E9]/76 sm:text-lg">
                If you&apos;re building something useful, fixing something broken, researching a weird problem, hiring DewBwah, or trying to make sense of an idea that has too many moving parts, send it over.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {contactLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-semibold transition duration-300 active:translate-y-px ${
                      index === 0
                        ? "border-aqua/50 bg-aqua text-[#1f2525] hover:bg-[#66C3FF]"
                        : "border-white/12 bg-white/[0.06] text-white hover:border-aqua/35 hover:bg-white/[0.1]"
                    }`}
                    aria-label={link.label}
                  >
                    {index === 0 ? <Mail className="size-4" aria-hidden="true" /> : null}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <MotionShell key={card.title} delay={index * 0.04} className="rounded-3xl border border-white/10 bg-[#363732]/62 p-5">
                    <Icon className="size-5 text-aqua" aria-hidden="true" />
                    <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#DCE1E9]/74">{card.body}</p>
                  </MotionShell>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#DCE1E9]/65 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-semibold text-white">Shelby DuBois</p>
            <p>Founder of DewBwah</p>
          </div>
          <p>Kansas City-based. Apple-powered. Mildly allergic to bad marketing.</p>
        </div>
      </footer>
    </main>
  );
}
