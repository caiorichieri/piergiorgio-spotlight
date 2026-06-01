import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useT } from "../i18n";
import { PageHero } from "../components/PageHero";
import { getGallery } from "../lib/content.functions";

const photosQO = queryOptions({
  queryKey: ["gallery"],
  queryFn: () => getGallery(),
});

export const Route = createFileRoute("/galleria")({
  head: () => ({
    meta: [
      { title: "Galleria — Atletica 2000 e Codroipo C'è" },
      {
        name: "description",
        content: "Immagini dalla pista, dal meeting e dagli eventi del Medio Friuli.",
      },
      { property: "og:title", content: "Galleria — Piergiorgio Iacuzzo" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(photosQO),
  component: GalleryPage,
  errorComponent: ({ error }) => (
    <div className="p-10 text-center text-sm text-destructive">{error.message}</div>
  ),
});

function GalleryPage() {
  const { t, lang } = useT();
  const { data } = useSuspenseQuery(photosQO);
  const photos = data.photos;
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <PageHero eyebrow={t("galleria_tag")} title={t("galleria_title")} />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        {photos.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted-foreground">
            {t("agenda_empty")}
          </p>
        ) : (
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
            {photos.map((p, i) => {
              const caption = lang === "it" ? p.caption_it : p.caption_en;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(i)}
                  className="group block w-full overflow-hidden rounded-md border border-border bg-card text-left"
                >
                  <img
                    src={p.url}
                    alt={caption || ""}
                    loading="lazy"
                    className="w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  {caption && (
                    <div className="px-3 py-2 text-xs text-muted-foreground">{caption}</div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </section>

      {active !== null && photos[active] && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
        >
          <img
            src={photos[active].url}
            alt={(lang === "it" ? photos[active].caption_it : photos[active].caption_en) || ""}
            className="max-h-[90vh] max-w-[95vw] object-contain"
          />
        </div>
      )}
    </>
  );
}
