import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useT } from "../i18n";
import { Reveal, SectionEyebrow } from "../components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Piergiorgio Iacuzzo — Presidente Atletica 2000 e Codroipo C'è" },
      {
        name: "description",
        content:
          "Profilo ufficiale di Piergiorgio Iacuzzo: presidente di ASD Atletica 2000 e Codroipo C'è, imprenditore del Medio Friuli.",
      },
      { property: "og:title", content: "Piergiorgio Iacuzzo — Medio Friuli" },
      {
        property: "og:description",
        content:
          "Vent'anni al servizio dello sport e della comunità del Medio Friuli.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useT();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="hero-line" style={{ top: "18%", animationDelay: "0s" }} />
          <div className="hero-line" style={{ top: "42%", animationDelay: "2s" }} />
          <div className="hero-line" style={{ top: "68%", animationDelay: "4s" }} />
          <div
            className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--brand-gold)" }}
          />
          <div
            className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "var(--brand-red)" }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t("hero_tag")}
            </div>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Piergiorgio
              <br />
              <span className="italic text-accent">Iacuzzo.</span>
            </h1>

            <div className="mt-8 max-w-2xl space-y-1 font-mono text-sm uppercase tracking-[0.16em] text-primary-foreground/70">
              <div>{t("hero_role_1")}</div>
              <div>{t("hero_role_2")}</div>
              <div>{t("hero_role_3")}</div>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              {t("hero_desc")}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/bio"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                {t("nav_bio")}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contatti"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                {t("nav_contatti")}
              </Link>
            </div>
          </div>

          <aside className="grid grid-cols-2 gap-4 self-end lg:col-span-4">
            {[
              { n: "456", l: t("hero_kpi1_label") },
              { n: "5.000", l: t("hero_kpi2_label") },
              { n: "40", l: t("hero_kpi3_label") },
              { n: "1", l: t("hero_kpi4_label") },
            ].map((k, i) => (
              <div
                key={i}
                className="rounded-md border border-primary-foreground/15 bg-primary-foreground/[0.04] p-5"
              >
                <div className="font-serif text-3xl text-accent">{k.n}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground/70">
                  {k.l}
                </div>
              </div>
            ))}
          </aside>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.22em] text-primary-foreground/50">
          <ChevronDown size={14} className="mx-auto animate-bounce" />
          {t("hero_scroll")}
        </div>
      </section>

      {/* QUICK NAV CARDS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { to: "/bio", tag: t("section_bio_tag"), title: t("nav_bio") },
            { to: "/atletica-2000", tag: t("atletica_tag"), title: t("nav_atletica") },
            { to: "/meeting", tag: t("meeting_tag"), title: t("nav_meeting") },
            { to: "/codroipo-ce", tag: t("codroipo_tag"), title: t("nav_codroipo") },
          ].map((c, i) => (
            <Reveal key={c.to} delay={i * 80}>
              <Link
                to={c.to}
                className="group block h-full rounded-md border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {c.tag}
                </div>
                <div className="mt-4 font-serif text-2xl text-foreground">{c.title}</div>
                <div className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-foreground/70 group-hover:text-accent">
                  → {t("agenda_view")}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BIO TEASER */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionEyebrow>{t("section_bio_tag")}</SectionEyebrow>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              {t("section_bio_title_1")}{" "}
              <span className="italic text-accent">{t("section_bio_title_2")}</span>
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-foreground/85 lg:col-span-7">
            <Reveal as="p">{t("bio_p1")}</Reveal>
            <Reveal as="p" delay={120}>{t("bio_p3")}</Reveal>
            <Link
              to="/bio"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
            >
              {t("nav_bio")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* VALORI TEASER */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionEyebrow>{t("valori_tag")}</SectionEyebrow>
        <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
          {t("valori_title")}
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: t("valore1_title"), d: t("valore1_text") },
            { t: t("valore2_title"), d: t("valore2_text") },
            { t: t("valore3_title"), d: t("valore3_text") },
            { t: t("valore4_title"), d: t("valore4_text") },
          ].map((v, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="h-full rounded-md border border-border bg-card p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  0{i + 1}
                </div>
                <div className="mt-3 font-serif text-xl text-foreground">{v.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
