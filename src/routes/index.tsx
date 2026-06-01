import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Award } from "lucide-react";
import { useT } from "../i18n";
import { Reveal, SectionEyebrow } from "../components/Reveal";
import portrait from "../assets/piergiorgio-cutout.png.asset.json";
import medal from "../assets/medaglia-paralimpico.jpg.asset.json";
import logoAtletica from "../assets/logo-atletica-2000.png.asset.json";
import logoCodroipo from "../assets/logo-codroipo-ce.png.asset.json";
import logoPGFriuli from "../assets/logo-pg-friuli-trasparente.png.asset.json";

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
      { property: "og:image", content: portrait.url },
      { name: "twitter:image", content: portrait.url },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useT();
  const valori = [
    { t: t("valore1_title"), d: t("valore1_text") },
    { t: t("valore2_title"), d: t("valore2_text") },
    { t: t("valore3_title"), d: t("valore3_text") },
    { t: t("valore4_title"), d: t("valore4_text") },
  ];

  return (
    <>
      {/* HERO — split with real portrait */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="hero-line" style={{ top: "22%", animationDelay: "0s" }} />
          <div className="hero-line" style={{ top: "58%", animationDelay: "2.5s" }} />
          <div
            className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-25 blur-3xl"
            style={{ background: "var(--brand-gold)" }}
          />
          <img
            src={logoPGFriuli.url}
            alt="PG Friuli — Orgoglio e Tradizione"
            className="pointer-events-none absolute -right-16 -top-10 h-72 w-72 select-none opacity-90 drop-shadow-2xl md:h-96 md:w-96 lg:-right-20 lg:-top-16"
            style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.35))" }}
            loading="eager"
          />
          <div
            className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full opacity-15 blur-3xl"
            style={{ background: "var(--brand-yellow)" }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="flag-italy" aria-label="Italia">
                <span /><span /><span />
              </span>
              <span className="flag-friuli" aria-label="Friuli">FVG</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">
                {t("hero_tag")}
              </span>
            </div>

            <h1 className="mt-6 font-serif text-5xl leading-[1.04] tracking-tight sm:text-6xl md:text-7xl">
              Piergiorgio
              <br />
              <span className="italic text-accent">Iacuzzo.</span>
            </h1>

            <div className="mt-6 max-w-2xl space-y-1 font-mono text-xs uppercase tracking-[0.16em] text-primary-foreground/75 sm:text-sm">
              <div>— {t("hero_role_1")}</div>
              <div>— {t("hero_role_2")}</div>
              <div>— {t("hero_role_3")}</div>
            </div>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              {t("hero_desc")}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
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

          <div className="relative lg:col-span-5">
            <div className="photo-frame mx-auto max-w-md lg:ml-auto">
              <img
                src={portrait.url}
                alt="Piergiorgio Iacuzzo"
                className="block h-auto w-full"
                loading="eager"
              />
            </div>
            {/* floating KPI tile */}
            <div className="absolute -bottom-6 -left-2 hidden rounded-md border border-primary-foreground/15 bg-background/95 p-4 text-foreground shadow-xl backdrop-blur sm:block lg:-left-10">
              <div className="font-serif text-3xl leading-none text-primary">456</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {t("hero_kpi1_label")}
              </div>
            </div>
            <div className="absolute -top-4 right-0 hidden rounded-md border border-primary-foreground/15 bg-background/95 p-4 text-foreground shadow-xl backdrop-blur md:block">
              <div className="font-serif text-3xl leading-none text-primary">5.000</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {t("hero_kpi2_label")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSOCIATIONS STRIP — real logos + external links */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <SectionEyebrow>{t("assoc_strip_eyebrow")}</SectionEyebrow>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                href: "https://www.atletica2000.it",
                logo: logoAtletica.url,
                name: t("assoc_atletica_name"),
                role: t("assoc_atletica_role"),
                domain: "atletica2000.it",
              },
              {
                href: "https://www.codroipoce.it",
                logo: logoCodroipo.url,
                name: t("assoc_codroipo_name"),
                role: t("assoc_codroipo_role"),
                domain: "codroipoce.it",
              },
            ].map((a, i) => (
              <Reveal key={a.href} delay={i * 100}>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex h-full items-center gap-5 rounded-md border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
                >
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-card p-2">
                    <img src={a.logo} alt={a.name} className="h-full w-full object-contain" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-serif text-2xl text-foreground">{a.name}</span>
                    <span className="block text-sm text-muted-foreground">{a.role}</span>
                    <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-primary group-hover:text-accent">
                      {a.domain} <ExternalLink size={12} />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEDAL — Riconoscimento Paralimpico */}
      <section className="relative overflow-hidden bg-background paper-grain">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="photo-frame">
              <img
                src={medal.url}
                alt="Stella di Bronzo al Merito Sportivo — Comitato Italiano Paralimpico"
                className="block h-auto w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <SectionEyebrow>
              <Award size={12} className="mr-1.5 inline -translate-y-px text-accent" />
              {t("medal_tag")}
            </SectionEyebrow>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              {t("medal_title")}
            </h2>
            <div className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {t("medal_authority")}
            </div>
            <Reveal as="p" className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85">
              {t("medal_text")}
            </Reveal>
            <Link
              to="/atletica-2000"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
            >
              {t("medal_cta")} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* BIO TEASER */}
      <section className="border-y border-border bg-secondary/50">
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

      {/* VALORI — no numbering, just a colored bar */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <SectionEyebrow>{t("valori_tag")}</SectionEyebrow>
        <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
          {t("valori_title")}
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {valori.map((v, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group h-full overflow-hidden rounded-md border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                <div className="h-1 w-full bg-accent transition-all group-hover:bg-primary" />
                <div className="p-6">
                  <div className="font-serif text-xl text-foreground">{v.t}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
