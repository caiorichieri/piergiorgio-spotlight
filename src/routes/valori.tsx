import { createFileRoute } from "@tanstack/react-router";
import { useT } from "../i18n";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";

export const Route = createFileRoute("/valori")({
  head: () => ({
    meta: [
      { title: "Valori — Piergiorgio Iacuzzo" },
      {
        name: "description",
        content: "I quattro principi che guidano l'azione di Piergiorgio Iacuzzo.",
      },
      { property: "og:title", content: "Valori — Piergiorgio Iacuzzo" },
      {
        property: "og:description",
        content: "Territorio, concretezza, inclusione, squadra.",
      },
    ],
  }),
  component: ValoriPage,
});

function ValoriPage() {
  const { t } = useT();
  const items = [
    { t: t("valore1_title"), d: t("valore1_text") },
    { t: t("valore2_title"), d: t("valore2_text") },
    { t: t("valore3_title"), d: t("valore3_text") },
    { t: t("valore4_title"), d: t("valore4_text") },
  ];
  return (
    <>
      <PageHero eyebrow={t("valori_tag")} title={t("valori_title")} />
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((v, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="h-full rounded-md border border-border bg-card p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Principio 0{i + 1}
                </div>
                <div className="mt-3 font-serif text-3xl text-foreground">{v.t}</div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
