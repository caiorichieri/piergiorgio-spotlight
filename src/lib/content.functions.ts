import { createServerFn } from "@tanstack/react-start";
import { supabaseAdmin } from "../integrations/supabase/client.server";

export const getEvents = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabaseAdmin
    .from("events")
    .select("id, title_it, title_en, description_it, description_en, location, url, cover_url, starts_at, ends_at")
    .order("starts_at", { ascending: true });
  if (error) return { events: [], error: error.message };
  return { events: data ?? [], error: null };
});

export const getNewsList = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabaseAdmin
    .from("news")
    .select("id, slug, title_it, title_en, excerpt_it, excerpt_en, cover_url, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });
  if (error) return { news: [], error: error.message };
  return { news: data ?? [], error: null };
});

export const getNewsBySlug = createServerFn({ method: "GET" })
  .inputValidator((d: { slug: string }) => d)
  .handler(async ({ data }) => {
    const { data: row, error } = await supabaseAdmin
      .from("news")
      .select("*")
      .eq("slug", data.slug)
      .eq("status", "published")
      .maybeSingle();
    if (error) return { news: null, error: error.message };
    return { news: row, error: null };
  });

export const getGallery = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabaseAdmin
    .from("gallery_photos")
    .select("id, url, caption_it, caption_en, taken_at, sort_order")
    .order("sort_order", { ascending: true });
  if (error) return { photos: [], error: error.message };
  return { photos: data ?? [], error: null };
});
