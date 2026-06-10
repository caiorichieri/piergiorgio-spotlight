import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { adminListGallery, adminUpsertPhoto, adminDeletePhoto } from "@/lib/admin.functions";
import { Trash2, Pencil, Plus, X } from "lucide-react";
import { Field } from "./admin.agenda";
import { ImageUpload } from "@/components/ImageUpload";

export const Route = createFileRoute("/_authenticated/admin/gallery")({
  component: AdminGallery,
});

type P = {
  id: string;
  url: string;
  caption_it: string;
  caption_en: string;
  taken_at: string | null;
  sort_order: number;
};

function AdminGallery() {
  const list = useServerFn(adminListGallery);
  const upsert = useServerFn(adminUpsertPhoto);
  const del = useServerFn(adminDeletePhoto);
  const [items, setItems] = useState<P[]>([]);
  const [editing, setEditing] = useState<Partial<P> | null>(null);
  const [busy, setBusy] = useState(false);

  async function refresh() {
    const r = await list();
    setItems(r.photos as P[]);
  }
  useEffect(() => { refresh(); }, []);

  async function save() {
    if (!editing) return;
    setBusy(true);
    try {
      await upsert({
        data: {
          id: editing.id,
          url: editing.url || "",
          caption_it: editing.caption_it || "",
          caption_en: editing.caption_en || "",
          taken_at: editing.taken_at || null,
          sort_order: Number(editing.sort_order ?? 0),
        },
      });
      setEditing(null);
      await refresh();
    } catch (e) {
      alert(e instanceof Error ? e.message : "Errore");
    } finally {
      setBusy(false);
    }
  }

  async function remove(id: string) {
    if (!confirm("Eliminare questa foto?")) return;
    await del({ data: { id } });
    await refresh();
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h2 className="font-serif text-xl">Foto ({items.length})</h2>
        <button onClick={() => setEditing({ sort_order: items.length })} className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
          <Plus size={13} /> Nuova
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {items.map((p) => (
          <div key={p.id} className="group relative overflow-hidden rounded-md border border-border bg-card">
            <img src={p.url} alt={p.caption_it} className="aspect-square w-full object-cover" />
            <div className="p-2">
              <div className="truncate text-xs font-medium">{p.caption_it || "—"}</div>
              <div className="text-[10px] font-mono uppercase text-muted-foreground">ordine: {p.sort_order}</div>
            </div>
            <div className="absolute right-1 top-1 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
              <button onClick={() => setEditing(p)} className="rounded-md bg-background/90 p-1.5"><Pencil size={12} /></button>
              <button onClick={() => remove(p.id)} className="rounded-md bg-background/90 p-1.5 text-destructive"><Trash2 size={12} /></button>
            </div>
          </div>
        ))}
        {items.length === 0 && <div className="col-span-full rounded-md border border-dashed border-border p-8 text-center text-sm text-muted-foreground">Nessuna foto.</div>}
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4">
          <div className="my-10 w-full max-w-xl rounded-md border border-border bg-background p-6">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="font-serif text-lg">{editing.id ? "Modifica foto" : "Nuova foto"}</h3>
              <button onClick={() => setEditing(null)}><X size={18} /></button>
            </div>
            <div className="mt-4 grid gap-3">
              <ImageUpload label="Immagine" value={editing.url || ""} onChange={(v) => setEditing({ ...editing, url: v })} required />
              <Field label="Didascalia (IT)" value={editing.caption_it || ""} onChange={(v) => setEditing({ ...editing, caption_it: v })} />
              <Field label="Didascalia (EN)" value={editing.caption_en || ""} onChange={(v) => setEditing({ ...editing, caption_en: v })} />
              <div className="grid gap-3 md:grid-cols-2">
                <Field label="Data scatto" type="date" value={editing.taken_at || ""} onChange={(v) => setEditing({ ...editing, taken_at: v })} />
                <Field label="Ordine" type="number" value={String(editing.sort_order ?? 0)} onChange={(v) => setEditing({ ...editing, sort_order: Number(v) })} />
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button onClick={() => setEditing(null)} className="rounded-md border border-border px-4 py-2 text-sm">Annulla</button>
              <button onClick={save} disabled={busy || !editing.url} className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground disabled:opacity-50">
                {busy ? "..." : "Salva"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
