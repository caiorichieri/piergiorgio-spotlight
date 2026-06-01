import { Link } from "@tanstack/react-router";
import { useT } from "../i18n";

export function SiteFooter() {
  const { t } = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl font-semibold">Piergiorgio Iacuzzo</div>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/75">
            {t("footer_tagline")}
          </p>
        </div>

        <div>
          <div className="mb-3 text-xs font-mono uppercase tracking-[0.18em] text-primary-foreground/60">
            {t("footer_links_heading")}
          </div>
          <ul className="grid grid-cols-2 gap-y-1.5 text-sm">
            {[
              ["/bio", "nav_bio"],
              ["/atletica-2000", "nav_atletica"],
              ["/meeting", "nav_meeting"],
              ["/codroipo-ce", "nav_codroipo"],
              ["/valori", "nav_valori"],
              ["/galleria", "nav_galleria"],
              ["/agenda", "nav_agenda"],
              ["/news", "nav_news"],
              ["/contatti", "nav_contatti"],
            ].map(([to, key]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  {t(key as never)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-3 text-xs font-mono uppercase tracking-[0.18em] text-primary-foreground/60">
            {t("footer_assoc_heading")}
          </div>
          <ul className="space-y-1.5 text-sm text-primary-foreground/80">
            <li>ASD Atletica 2000 — Codroipo (UD)</li>
            <li>Codroipo C'è — Medio Friuli</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:px-6">
          <div>© {year} Piergiorgio Iacuzzo. {t("footer_rights")}</div>
          <div className="font-mono uppercase tracking-[0.18em]">Medio Friuli · FVG · Italia</div>
        </div>
      </div>
    </footer>
  );
}
